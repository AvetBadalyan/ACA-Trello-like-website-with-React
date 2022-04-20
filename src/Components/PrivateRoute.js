import React from "react";
import { Navigate } from "react-router";
import { useSmartContext } from "../state/state";

export default function PrivateRoute({ children }) {
  const {
    state: { isLoggedIn },
  } = useSmartContext();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
