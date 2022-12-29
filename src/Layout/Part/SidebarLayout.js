import React, { lazy, Suspense, Fragment } from 'react';
import { EdgeSidebar } from "@mui-treasury/layout";
import Navigation from '../Navigation';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const KeyboardArrowLeft = lazy(() => import("@mui/icons-material/KeyboardArrowLeft"));
const KeyboardArrowRight = lazy(() => import("@mui/icons-material/KeyboardArrowRight"));
const ButtonBase = lazy(() => import("@mui/material/ButtonBase"));
const Logo = lazy(() => import('../Navigation/Logo'));

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
            <Suspense fallback={"loading sidebar footer"}>
              {!isXS && (<ButtonBase
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
                  bottom: 0,
                  position: "absolute"
                }}
              >
                {leftSidebarCTX.state.leftEdgeSidebar.collapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </ButtonBase>)}
            </Suspense>
          </Fragment>
        )
      }}
    </EdgeSidebar>
  )
}

export default SidebarLayout;