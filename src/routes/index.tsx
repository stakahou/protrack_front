import React, { FC } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ManagementLayout } from "../layouts/managementLayout";
import { Login } from "../views/login";
import { Contributor } from "../views/management/contributor";
import { Project } from "../views/management/project";
import { ProjectContributors } from "../views/management/projectContributors";
import { Protrack } from "../views/management/protrack";

const Routes: FC = () => {
  return useRoutes([
    { path: "login", element: <Login /> },
    {
      path: "management",
      element: <ManagementLayout />,
      children: [
        { path: "projects", element: <Project /> },
        {
          path: "projects/:projectId/contributors",
          element: <ProjectContributors />,
        },
        { path: "contributors", element: <Contributor /> },
        { path: "protracks", element: <Protrack /> },
      ],
    },
    { path: "*", element: <Navigate to="/login" /> },
  ]);
};

export default Routes;
