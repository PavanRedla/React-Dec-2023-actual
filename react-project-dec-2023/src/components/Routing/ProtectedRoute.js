import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // children is a component which we needs to be protected. If we simply hide the nav links in navbar page instead of using this Protected Route then some one may access the hided component using URL.
  const role = "student"; // this line is hard coded, in actual we use API fetch role
  //   const role = "admin";
  if (role === "teacher") {
    alert("You are not allowed to go to this route");

    return <Navigate to="/home" replace />;
    // return <Navigate to="/home" />;

    // replace -replaces the current location instead of pushing a new one onto the browser history stack.
    // This means suppose if we go to home page and then we go to careers page from home and then we tried to go to Products page but we got error that we are not allowed to go to products page and then we get redirected to Home page.
    // Now, the previous page of Home page is Careers page eventhough we are redirected to Home page from Prodcts page, replace will not add the products page in history as the route to products page was unsuccessful. if we donot use replace then when you try to go to previous page then form home page it again goes to products page instead of career page.
  }

  return children;
}
