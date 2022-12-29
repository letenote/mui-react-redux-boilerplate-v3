import React, { lazy, Suspense } from 'react';
import { Header, EdgeTrigger } from "@mui-treasury/layout";
const Menu = lazy(() => import("@mui/icons-material/Menu"));
const KeyboardArrowLeft = lazy(() => import("@mui/icons-material/KeyboardArrowLeft"));
const Box = lazy(() => import("@mui/material/Box"));
const IconButton = lazy(() => import("@mui/material/IconButton"));

const HeaderLayout = ({ isXS = false }) => {
  if( !isXS ) return;
  return (
    <Header>
      <Suspense fallback={"loading header"}>
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", px: 2, gap: 1 }} >
          <EdgeTrigger target={{ anchor: "left", field: "open" }}>
            {(open, setOpen) => (
              <IconButton onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowLeft /> : <Menu />}
              </IconButton>
            )}
          </EdgeTrigger>
          Header
        </Box>
      </Suspense>
    </Header>
  )
}

export default HeaderLayout;