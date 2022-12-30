import React, { Fragment, lazy } from 'react';
import { SidebarContent } from "@mui-treasury/layout";
const Menu = lazy(() => import('Layout/Navigation/Menu'));

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
    </Fragment>
  )
}

export default Navigation;