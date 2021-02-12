export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Protrack = {
  __typename?: "Protrack";
  id?: Maybe<Scalars["Int"]>;
  created_at: Scalars["DateTime"];
  update_at: Scalars["DateTime"];
  issue: Scalars["String"];
  description: Scalars["String"];
  week: Scalars["Int"];
  year: Scalars["Int"];
  user: User;
};

export type Project = {
  __typename?: "Project";
  id?: Maybe<Scalars["Int"]>;
  created_at: Scalars["DateTime"];
  update_at: Scalars["DateTime"];
  name: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["Int"]>;
  created_at: Scalars["DateTime"];
  update_at: Scalars["DateTime"];
  social_id: Scalars["String"];
  code?: Maybe<Scalars["String"]>;
  allocation?: Maybe<Scalars["String"]>;
  last_name: Scalars["String"];
  first_name: Scalars["String"];
  full_name?: Maybe<Scalars["String"]>;
  picture: Scalars["String"];
  email: Scalars["String"];
  active: Scalars["Boolean"];
  role: Scalars["String"];
  projects: Array<Project>;
  protracks: Array<Protrack>;
};

export type Auth = {
  __typename?: "Auth";
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  email: Scalars["String"];
  picture: Scalars["String"];
  role: Scalars["String"];
  active: Scalars["Boolean"];
  token: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  contributor: User;
  contributors: Array<User>;
  project: Project;
  projects: Array<Project>;
  project_contributors: Array<User>;
  protrack: Protrack;
  protracks: Array<Protrack>;
};

export type QueryContributorArgs = {
  id: Scalars["Int"];
};

export type QueryProjectArgs = {
  id: Scalars["Int"];
};

export type QueryProject_ContributorsArgs = {
  id: Scalars["Int"];
};

export type QueryProtrackArgs = {
  id: Scalars["Int"];
};

export type QueryProtracksArgs = {
  year: Scalars["Int"];
  week: Scalars["Int"];
  projectId: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  update_contributor: User;
  googleLogin: Auth;
  create_project: Project;
  update_project: Project;
  remove_project: Project;
  add_contributors: Scalars["Boolean"];
  remove_contributors: Scalars["Boolean"];
  add_protrack: Array<Protrack>;
};

export type MutationUpdate_ContributorArgs = {
  data: UpdateUserInput;
  id: Scalars["Int"];
};

export type MutationGoogleLoginArgs = {
  access_token: Scalars["String"];
};

export type MutationCreate_ProjectArgs = {
  data: CreateProjectInput;
};

export type MutationUpdate_ProjectArgs = {
  data: UpdateProjectInput;
  id: Scalars["Int"];
};

export type MutationRemove_ProjectArgs = {
  id: Scalars["Int"];
};

export type MutationAdd_ContributorsArgs = {
  contributorIds: Array<Scalars["Int"]>;
  projectId: Scalars["Int"];
};

export type MutationRemove_ContributorsArgs = {
  contributorIds: Array<Scalars["Int"]>;
  projectId: Scalars["Int"];
};

export type MutationAdd_ProtrackArgs = {
  protracks: Array<CreateProtrackInput>;
  projectId: Scalars["Int"];
};

export type UpdateUserInput = {
  code?: Maybe<Scalars["String"]>;
  allocation?: Maybe<Scalars["String"]>;
};

export type CreateProjectInput = {
  name: Scalars["String"];
};

export type UpdateProjectInput = {
  name?: Maybe<Scalars["String"]>;
};

export type CreateProtrackInput = {
  id?: Maybe<Scalars["Int"]>;
  issue: Scalars["String"];
  description: Scalars["String"];
  week: Scalars["Int"];
  year: Scalars["Int"];
};

export type Subscription = {
  __typename?: "Subscription";
  protrackAdded: Protrack;
};

export type SubscriptionProtrackAddedArgs = {
  projectId: Scalars["Int"];
};
