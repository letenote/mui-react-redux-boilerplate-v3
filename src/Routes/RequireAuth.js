import React, { memo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
	const { authed } = useSelector((state) => state.auth);
	const location = useLocation();
	console.log("auth", { location, authed });

	if (!authed) return <Navigate to="/login" state={{ from: location }} replace />;
	return children;
}

export default memo(RequireAuth);