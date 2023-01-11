import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../configs/AppContext";

const PrivateRoute = () => {
  const [state, dispatch] = useContext(AppContext);

  return state.isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
