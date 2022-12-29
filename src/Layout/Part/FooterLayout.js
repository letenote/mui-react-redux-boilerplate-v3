import React from "react";
import { Footer } from "@mui-treasury/layout";

const FooterLayout = ({ show = false }) => {
  if (!show) return;
  return (
    <Footer style={{ padding: "45px 30px" }}>Footer</Footer>
  )
};

export default FooterLayout;