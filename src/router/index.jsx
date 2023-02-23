import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Signup from "../Layout/Signup";
import Login from "../Layout/Login";
import Users from "../Layout/Users";
import User from "../Layout/User";
import UserDetails from "../Layout/UserDetails";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/users",
    element: <Users />,
    errorElement: <ErrorPage />
  },
  {
    path: "/users/:userId",
    element: <User />,
    errorElement: <ErrorPage />
  },
  {
    path: "/users/:userId/updateDetails",
    element: <UserDetails />,
    errorElement: <ErrorPage />
  }
]);

export default router;
