import React, { Fragment, lazy, Suspense } from 'react';
import { SidebarContent } from "@mui-treasury/layout";
const Profile = lazy(() => import('./Profile'));
const Divider = lazy(() => import('@mui/material/Divider'));
const Stack = lazy(() => import('@mui/material/Stack'));
const Box = lazy(() => import("@mui/material/Box"));
const Menu = lazy(() => import('./Menu'));

const Navigation = ({
  sidebarCollapse = false,
  isMobile = false,
  ctx
}) => {
  return (
    <Fragment >
      <SidebarContent>
        <Menu 
          sidebarCollapse={sidebarCollapse} 
          onClick={() => isMobile && setTimeout(() => ctx.setOpen('leftEdgeSidebar',false),100)}
        />
      </SidebarContent>
      <Suspense fallback={""}>
        <Box
          sx={{
            bottom: isMobile ? 0 : 40,
            position: "absolute",
            width: "100%",
            bgcolor: "white",
          }}
        >
          <Divider />
          <Stack direction="row" spacing={2} sx={{ p: "12px" }}>
            <Suspense fallback={"loading profile"}>
              <Profile sidebarCollapse={sidebarCollapse} />
            </Suspense>
          </Stack>
        </Box>
      </Suspense>
    </Fragment>
  )
}

export default Navigation;