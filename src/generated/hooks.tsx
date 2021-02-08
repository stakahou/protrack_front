import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export const LoginDocument = gql`
  mutation Login($access_token: String!) {
    googleLogin(access_token: $access_token) {
      first_name
      last_name
      email
      picture
      role
      active
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  Types.LoginMutation,
  Types.LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      access_token: // value for 'access_token'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.LoginMutation,
    Types.LoginMutationVariables
  >
) {
  return Apollo.useMutation<Types.LoginMutation, Types.LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<Types.LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  Types.LoginMutation,
  Types.LoginMutationVariables
>;
export const CreateProjectDocument = gql`
  mutation CreateProject($data: CreateProjectInput!) {
    create_project(data: $data) {
      id
      name
    }
  }
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<
  Types.CreateProjectMutation,
  Types.CreateProjectMutationVariables
>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateProjectMutation,
    Types.CreateProjectMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.CreateProjectMutation,
    Types.CreateProjectMutationVariables
  >(CreateProjectDocument, baseOptions);
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>;
export type CreateProjectMutationResult = Apollo.MutationResult<Types.CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateProjectMutation,
  Types.CreateProjectMutationVariables
>;
export const UpdateProjectDocument = gql`
  mutation UpdateProject($id: Int!, $data: UpdateProjectInput!) {
    update_project(id: $id, data: $data) {
      id
      name
    }
  }
`;
export type UpdateProjectMutationFn = Apollo.MutationFunction<
  Types.UpdateProjectMutation,
  Types.UpdateProjectMutationVariables
>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateProjectMutation,
    Types.UpdateProjectMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.UpdateProjectMutation,
    Types.UpdateProjectMutationVariables
  >(UpdateProjectDocument, baseOptions);
}
export type UpdateProjectMutationHookResult = ReturnType<
  typeof useUpdateProjectMutation
>;
export type UpdateProjectMutationResult = Apollo.MutationResult<Types.UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateProjectMutation,
  Types.UpdateProjectMutationVariables
>;
export const UpdateContributorDocument = gql`
  mutation UpdateContributor($id: Int!, $data: UpdateUserInput!) {
    update_contributor(id: $id, data: $data) {
      id
      full_name
      code
      allocation
      picture
      email
      active
    }
  }
`;
export type UpdateContributorMutationFn = Apollo.MutationFunction<
  Types.UpdateContributorMutation,
  Types.UpdateContributorMutationVariables
>;

/**
 * __useUpdateContributorMutation__
 *
 * To run a mutation, you first call `useUpdateContributorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContributorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContributorMutation, { data, loading, error }] = useUpdateContributorMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateContributorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateContributorMutation,
    Types.UpdateContributorMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.UpdateContributorMutation,
    Types.UpdateContributorMutationVariables
  >(UpdateContributorDocument, baseOptions);
}
export type UpdateContributorMutationHookResult = ReturnType<
  typeof useUpdateContributorMutation
>;
export type UpdateContributorMutationResult = Apollo.MutationResult<Types.UpdateContributorMutation>;
export type UpdateContributorMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateContributorMutation,
  Types.UpdateContributorMutationVariables
>;
export const AddProjectContributorsDocument = gql`
  mutation AddProjectContributors($projectId: Int!, $contributorIds: [Int!]!) {
    add_contributors(projectId: $projectId, contributorIds: $contributorIds)
  }
`;
export type AddProjectContributorsMutationFn = Apollo.MutationFunction<
  Types.AddProjectContributorsMutation,
  Types.AddProjectContributorsMutationVariables
>;

/**
 * __useAddProjectContributorsMutation__
 *
 * To run a mutation, you first call `useAddProjectContributorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectContributorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectContributorsMutation, { data, loading, error }] = useAddProjectContributorsMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      contributorIds: // value for 'contributorIds'
 *   },
 * });
 */
export function useAddProjectContributorsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddProjectContributorsMutation,
    Types.AddProjectContributorsMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.AddProjectContributorsMutation,
    Types.AddProjectContributorsMutationVariables
  >(AddProjectContributorsDocument, baseOptions);
}
export type AddProjectContributorsMutationHookResult = ReturnType<
  typeof useAddProjectContributorsMutation
>;
export type AddProjectContributorsMutationResult = Apollo.MutationResult<Types.AddProjectContributorsMutation>;
export type AddProjectContributorsMutationOptions = Apollo.BaseMutationOptions<
  Types.AddProjectContributorsMutation,
  Types.AddProjectContributorsMutationVariables
>;
export const RemoveProjectContributorsDocument = gql`
  mutation RemoveProjectContributors(
    $projectId: Int!
    $contributorIds: [Int!]!
  ) {
    remove_contributors(projectId: $projectId, contributorIds: $contributorIds)
  }
`;
export type RemoveProjectContributorsMutationFn = Apollo.MutationFunction<
  Types.RemoveProjectContributorsMutation,
  Types.RemoveProjectContributorsMutationVariables
>;

/**
 * __useRemoveProjectContributorsMutation__
 *
 * To run a mutation, you first call `useRemoveProjectContributorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProjectContributorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProjectContributorsMutation, { data, loading, error }] = useRemoveProjectContributorsMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      contributorIds: // value for 'contributorIds'
 *   },
 * });
 */
export function useRemoveProjectContributorsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.RemoveProjectContributorsMutation,
    Types.RemoveProjectContributorsMutationVariables
  >
) {
  return Apollo.useMutation<
    Types.RemoveProjectContributorsMutation,
    Types.RemoveProjectContributorsMutationVariables
  >(RemoveProjectContributorsDocument, baseOptions);
}
export type RemoveProjectContributorsMutationHookResult = ReturnType<
  typeof useRemoveProjectContributorsMutation
>;
export type RemoveProjectContributorsMutationResult = Apollo.MutationResult<Types.RemoveProjectContributorsMutation>;
export type RemoveProjectContributorsMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveProjectContributorsMutation,
  Types.RemoveProjectContributorsMutationVariables
>;
export const ContributorDocument = gql`
  query Contributor($id: Int!) {
    contributor(id: $id) {
      id
    }
  }
`;

/**
 * __useContributorQuery__
 *
 * To run a query within a React component, call `useContributorQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContributorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContributorQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.ContributorQuery,
    Types.ContributorQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.ContributorQuery,
    Types.ContributorQueryVariables
  >(ContributorDocument, baseOptions);
}
export function useContributorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ContributorQuery,
    Types.ContributorQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.ContributorQuery,
    Types.ContributorQueryVariables
  >(ContributorDocument, baseOptions);
}
export type ContributorQueryHookResult = ReturnType<typeof useContributorQuery>;
export type ContributorLazyQueryHookResult = ReturnType<
  typeof useContributorLazyQuery
>;
export type ContributorQueryResult = Apollo.QueryResult<
  Types.ContributorQuery,
  Types.ContributorQueryVariables
>;
export const ProjectDocument = gql`
  query Project($id: Int!) {
    project(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.ProjectQuery,
    Types.ProjectQueryVariables
  >
) {
  return Apollo.useQuery<Types.ProjectQuery, Types.ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  );
}
export function useProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ProjectQuery,
    Types.ProjectQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.ProjectQuery, Types.ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  );
}
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>;
export type ProjectQueryResult = Apollo.QueryResult<
  Types.ProjectQuery,
  Types.ProjectQueryVariables
>;
export const ProjectsDocument = gql`
  query Projects {
    projects {
      id
      name
    }
  }
`;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.ProjectsQuery,
    Types.ProjectsQueryVariables
  >
) {
  return Apollo.useQuery<Types.ProjectsQuery, Types.ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions
  );
}
export function useProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ProjectsQuery,
    Types.ProjectsQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.ProjectsQuery, Types.ProjectsQueryVariables>(
    ProjectsDocument,
    baseOptions
  );
}
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<
  typeof useProjectsLazyQuery
>;
export type ProjectsQueryResult = Apollo.QueryResult<
  Types.ProjectsQuery,
  Types.ProjectsQueryVariables
>;
export const AllContributorsAndContributorsByProjectDocument = gql`
  query AllContributorsAndContributorsByProject($id: Int!) {
    contributors {
      id
      full_name
    }
    project_contributors(id: $id) {
      id
      full_name
    }
  }
`;

/**
 * __useAllContributorsAndContributorsByProjectQuery__
 *
 * To run a query within a React component, call `useAllContributorsAndContributorsByProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllContributorsAndContributorsByProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllContributorsAndContributorsByProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllContributorsAndContributorsByProjectQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.AllContributorsAndContributorsByProjectQuery,
    Types.AllContributorsAndContributorsByProjectQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.AllContributorsAndContributorsByProjectQuery,
    Types.AllContributorsAndContributorsByProjectQueryVariables
  >(AllContributorsAndContributorsByProjectDocument, baseOptions);
}
export function useAllContributorsAndContributorsByProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.AllContributorsAndContributorsByProjectQuery,
    Types.AllContributorsAndContributorsByProjectQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.AllContributorsAndContributorsByProjectQuery,
    Types.AllContributorsAndContributorsByProjectQueryVariables
  >(AllContributorsAndContributorsByProjectDocument, baseOptions);
}
export type AllContributorsAndContributorsByProjectQueryHookResult = ReturnType<
  typeof useAllContributorsAndContributorsByProjectQuery
>;
export type AllContributorsAndContributorsByProjectLazyQueryHookResult = ReturnType<
  typeof useAllContributorsAndContributorsByProjectLazyQuery
>;
export type AllContributorsAndContributorsByProjectQueryResult = Apollo.QueryResult<
  Types.AllContributorsAndContributorsByProjectQuery,
  Types.AllContributorsAndContributorsByProjectQueryVariables
>;
export const ContributorsDocument = gql`
  query Contributors {
    contributors {
      id
      full_name
      code
      allocation
      picture
      email
      active
      projects {
        name
      }
    }
  }
`;

/**
 * __useContributorsQuery__
 *
 * To run a query within a React component, call `useContributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContributorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContributorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.ContributorsQuery,
    Types.ContributorsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.ContributorsQuery,
    Types.ContributorsQueryVariables
  >(ContributorsDocument, baseOptions);
}
export function useContributorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.ContributorsQuery,
    Types.ContributorsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.ContributorsQuery,
    Types.ContributorsQueryVariables
  >(ContributorsDocument, baseOptions);
}
export type ContributorsQueryHookResult = ReturnType<
  typeof useContributorsQuery
>;
export type ContributorsLazyQueryHookResult = ReturnType<
  typeof useContributorsLazyQuery
>;
export type ContributorsQueryResult = Apollo.QueryResult<
  Types.ContributorsQuery,
  Types.ContributorsQueryVariables
>;
export const AllContributorsProtracksByProjectDocument = gql`
  query AllContributorsProtracksByProject($id: Int!) {
    project_contributors(id: $id) {
      id
      full_name
      picture
      protracks {
        id
        issue
        description
      }
    }
  }
`;

/**
 * __useAllContributorsProtracksByProjectQuery__
 *
 * To run a query within a React component, call `useAllContributorsProtracksByProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllContributorsProtracksByProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllContributorsProtracksByProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAllContributorsProtracksByProjectQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.AllContributorsProtracksByProjectQuery,
    Types.AllContributorsProtracksByProjectQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.AllContributorsProtracksByProjectQuery,
    Types.AllContributorsProtracksByProjectQueryVariables
  >(AllContributorsProtracksByProjectDocument, baseOptions);
}
export function useAllContributorsProtracksByProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.AllContributorsProtracksByProjectQuery,
    Types.AllContributorsProtracksByProjectQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.AllContributorsProtracksByProjectQuery,
    Types.AllContributorsProtracksByProjectQueryVariables
  >(AllContributorsProtracksByProjectDocument, baseOptions);
}
export type AllContributorsProtracksByProjectQueryHookResult = ReturnType<
  typeof useAllContributorsProtracksByProjectQuery
>;
export type AllContributorsProtracksByProjectLazyQueryHookResult = ReturnType<
  typeof useAllContributorsProtracksByProjectLazyQuery
>;
export type AllContributorsProtracksByProjectQueryResult = Apollo.QueryResult<
  Types.AllContributorsProtracksByProjectQuery,
  Types.AllContributorsProtracksByProjectQueryVariables
>;
export const OnProtrackAddedDocument = gql`
  subscription OnProtrackAdded($projectId: Int!) {
    protrackAdded(projectId: $projectId) {
      id
      issue
      description
      user {
        id
      }
    }
  }
`;

/**
 * __useOnProtrackAddedSubscription__
 *
 * To run a query within a React component, call `useOnProtrackAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnProtrackAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnProtrackAddedSubscription({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useOnProtrackAddedSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    Types.OnProtrackAddedSubscription,
    Types.OnProtrackAddedSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    Types.OnProtrackAddedSubscription,
    Types.OnProtrackAddedSubscriptionVariables
  >(OnProtrackAddedDocument, baseOptions);
}
export type OnProtrackAddedSubscriptionHookResult = ReturnType<
  typeof useOnProtrackAddedSubscription
>;
export type OnProtrackAddedSubscriptionResult = Apollo.SubscriptionResult<Types.OnProtrackAddedSubscription>;
