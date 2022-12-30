import React, { lazy, Suspense, Fragment } from 'react';
import { EdgeSidebar } from "@mui-treasury/layout";
import Navigation from 'Layout/Navigation';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Box = lazy(() => import("@mui/material/Box"));
const Profile = lazy(() => import("Layout/Navigation/Profile"));
const KeyboardArrowLeft = lazy(() => import("@mui/icons-material/KeyboardArrowLeft"));
const KeyboardArrowRight = lazy(() => import("@mui/icons-material/KeyboardArrowRight"));
const ButtonBase = lazy(() => import("@mui/material/ButtonBase"));
const Logo = lazy(() => import('Layout/Navigation/Logo'));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SidebarLayout = ({ isXS = false }) => {
  return (
    <EdgeSidebar anchor="left" >
      {(leftSidebarCTX) => {
        console.log("aaasdf", leftSidebarCTX)
        return (
          <Fragment>
            <DrawerHeader>
              <Suspense fallback={"loading logo"}>
                <Logo />
              </Suspense>
            </DrawerHeader>
            <Divider />
            <Suspense fallback={"loading sidebar content"}>
              <Navigation
                sidebarCollapse={leftSidebarCTX.state.leftEdgeSidebar.collapsed}
                isMobile={isXS}
                ctx={leftSidebarCTX}
              />
            </Suspense>
            <div>
              <Suspense fallback={"loading sidebar profile"}>
                <Divider />
                <Box sx={{ pt: 1, pb: 1, pr: 1.5, pl: 1.5 }}>
                  <Profile sidebarCollapse={leftSidebarCTX.state.leftEdgeSidebar.collapsed} />
                </Box>
              </Suspense>
            </div>
            {!isXS && (
              <Suspense fallback={"loading sidebar footer"}>
                <Divider />
                <ButtonBase
                  name='collapse btn'
                  aria-label="collapse btn"
                  title="collapse btn"
                  onClick={() => leftSidebarCTX.setCollapsed("leftEdgeSidebar", !leftSidebarCTX.state.leftEdgeSidebar.collapsed)}
                  sx={{
                    minHeight: 40,
                    width: "100%",
                    bgcolor: "grey.100",
                    borderTop: "1px solid",
                    borderColor: "grey.200",
                  }}
                >
                  {leftSidebarCTX.state.leftEdgeSidebar.collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </ButtonBase>
              </Suspense>
            )}
          </Fragment>
        )
      }}
    </EdgeSidebar>
  )
}

export default SidebarLayout;