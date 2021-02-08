import * as Types from "./schemas";

export type LoginMutationVariables = Types.Exact<{
  access_token: Types.Scalars["String"];
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  googleLogin: { __typename?: "Auth" } & Pick<
    Types.Auth,
    | "first_name"
    | "last_name"
    | "email"
    | "picture"
    | "role"
    | "active"
    | "token"
  >;
};

export type CreateProjectMutationVariables = Types.Exact<{
  data: Types.CreateProjectInput;
}>;

export type CreateProjectMutation = { __typename?: "Mutation" } & {
  create_project: { __typename?: "Project" } & Pick<
    Types.Project,
    "id" | "name"
  >;
};

export type UpdateProjectMutationVariables = Types.Exact<{
  id: Types.Scalars["Int"];
  data: Types.UpdateProjectInput;
}>;

export type UpdateProjectMutation = { __typename?: "Mutation" } & {
  update_project: { __typename?: "Project" } & Pick<
    Types.Project,
    "id" | "name"
  >;
};

export type UpdateContributorMutationVariables = Types.Exact<{
  id: Types.Scalars["Int"];
  data: Types.UpdateUserInput;
}>;

export type UpdateContributorMutation = { __typename?: "Mutation" } & {
  update_contributor: { __typename?: "User" } & Pick<
    Types.User,
    "id" | "full_name" | "code" | "allocation" | "picture" | "email" | "active"
  >;
};

export type AddProjectContributorsMutationVariables = Types.Exact<{
  projectId: Types.Scalars["Int"];
  contributorIds: Array<Types.Scalars["Int"]> | Types.Scalars["Int"];
}>;

export type AddProjectContributorsMutation = { __typename?: "Mutation" } & Pick<
  Types.Mutation,
  "add_contributors"
>;

export type RemoveProjectContributorsMutationVariables = Types.Exact<{
  projectId: Types.Scalars["Int"];
  contributorIds: Array<Types.Scalars["Int"]> | Types.Scalars["Int"];
}>;

export type RemoveProjectContributorsMutation = {
  __typename?: "Mutation";
} & Pick<Types.Mutation, "remove_contributors">;

export type ContributorQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type ContributorQuery = { __typename?: "Query" } & {
  contributor: { __typename?: "User" } & Pick<Types.User, "id">;
};

export type ProjectQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type ProjectQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & Pick<Types.Project, "id" | "name">;
};

export type ProjectsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ProjectsQuery = { __typename?: "Query" } & {
  projects: Array<
    { __typename?: "Project" } & Pick<Types.Project, "id" | "name">
  >;
};

export type AllContributorsAndContributorsByProjectQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type AllContributorsAndContributorsByProjectQuery = {
  __typename?: "Query";
} & {
  contributors: Array<
    { __typename?: "User" } & Pick<Types.User, "id" | "full_name">
  >;
  project_contributors: Array<
    { __typename?: "User" } & Pick<Types.User, "id" | "full_name">
  >;
};

export type ContributorsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ContributorsQuery = { __typename?: "Query" } & {
  contributors: Array<
    { __typename?: "User" } & Pick<
      Types.User,
      | "id"
      | "full_name"
      | "code"
      | "allocation"
      | "picture"
      | "email"
      | "active"
    > & {
        projects: Array<
          { __typename?: "Project" } & Pick<Types.Project, "name">
        >;
      }
  >;
};

export type AllContributorsProtracksByProjectQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type AllContributorsProtracksByProjectQuery = {
  __typename?: "Query";
} & {
  project_contributors: Array<
    { __typename?: "User" } & Pick<
      Types.User,
      "id" | "full_name" | "picture"
    > & {
        protracks: Array<
          { __typename?: "Protrack" } & Pick<
            Types.Protrack,
            "id" | "issue" | "description"
          >
        >;
      }
  >;
};

export type OnProtrackAddedSubscriptionVariables = Types.Exact<{
  projectId: Types.Scalars["Int"];
}>;

export type OnProtrackAddedSubscription = { __typename?: "Subscription" } & {
  protrackAdded: { __typename?: "Protrack" } & Pick<
    Types.Protrack,
    "id" | "issue" | "description"
  > & { user: { __typename?: "User" } & Pick<Types.User, "id"> };
};
