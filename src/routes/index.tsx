import React, { FC } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ContributorLayout } from "../layouts/contributorLayout";
import { ManagementLayout } from "../layouts/managementLayout";
import { Project as CProject } from "../views/contributor/project";
import { Protrack as CProtrack } from "../views/contributor/protrack";
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
    {
      path: "contributor",
      element: <ContributorLayout />,
      children: [
        { path: "", element: <CProject /> },
        { path: "protrack/project/:projectId", element: <CProtrack /> },
      ],
    },
    { path: "*", element: <Navigate to="/login" /> },
  ]);
};

export default Routes;
