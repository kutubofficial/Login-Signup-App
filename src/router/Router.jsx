import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Layout from "../pages/layout/Layout";
import Profile from "../pages/profile/Profile";

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/profile",
        element:<Profile/>
      }
    ],
  },
]);
