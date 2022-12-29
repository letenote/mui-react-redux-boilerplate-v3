import React from "react";
import { useLocation } from "react-router-dom";

const Page404 = () => {
  const location = useLocation();
  return (
    <div>
      <h3>
        404: No match for - <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default React.memo(Page404, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});