import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/authLayout";
import { Register } from "./pages";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "auth",
        children: [
          {
            element: <AuthLayout/>,
            children:[ 
              { 
                path: "register", element:<Register />
              },
          {
            path: "login",
            element: <Login/>
          },
          {
            path: "forgot-password",
            element: <ForgotPassword/>
          }
          ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Poppins, sans-serif",
        headings: {
          fontFamily: "Inter, sans-serif",
        },
        primaryColor: "yellow"
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
