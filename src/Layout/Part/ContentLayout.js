import React from "react";
import { Content } from "@mui-treasury/layout";

const ContentLayout = ({
  children,
}) => {
  return (
    <Content style={{ padding: "45px 30px" }}>
      {children}
    </Content>
  )
}

export default ContentLayout;