import React from "react";
import { Navigate } from "react-router";
import { useSmartContext } from "../state/state";
import VisitePage from "./VisitePage";

export default function PrivateRoute({  children }) {
   const {
     state: { isLoggedIn }
   } = useSmartContext();
  if (!isLoggedIn) {
   return <Navigate to="login" replace />
  }
  return children;
}
