import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Root } from "@mui-treasury/layout";
import Scheme from './Scheme';
import CssBaseline from "@mui/material/CssBaseline";
import HeaderLayout from './Part/HeaderLayout';
import ContentLayout from './Part/ContentLayout';
import FooterLayout from './Part/FooterLayout';
import SidebarLayout from './Part/SidebarLayout';
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.only('xs'));
  const history = useLocation();
  const isLoginPage = history.pathname === "/login";
  if (isLoginPage) return (<Outlet />);
  return (
    <Root scheme={Scheme}>
      <CssBaseline />
      <HeaderLayout isXS={isXS}/>
      <SidebarLayout isXS={isXS}/>
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <FooterLayout />
    </Root>
  );
}

export default Layout;
