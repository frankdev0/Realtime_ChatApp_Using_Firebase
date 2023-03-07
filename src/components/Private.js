import React from "react";
import { useNavigate } from "react-router-dom";

const Private = ({ children, isAuth }) => {
  const navigate = useNavigate();
  if (isAuth) navigate("/");

  return <>{children}</>;
};

export default Private;
