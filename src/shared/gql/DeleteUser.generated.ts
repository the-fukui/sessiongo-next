import * as Types from '../@types/gql-types.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type DeleteUsersMutationMutationVariables = Types.Exact<{
  auth_id: Types.Scalars['String'];
}>;


export type DeleteUsersMutationMutation = { delete_users_by_pk?: Types.Maybe<{ id: number }> };


export const DeleteUsersMutationDocument = gql`
    mutation DeleteUsersMutation($auth_id: String!) {
  delete_users_by_pk(auth_id: $auth_id) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    DeleteUsersMutation(variables: DeleteUsersMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUsersMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUsersMutationMutation>(DeleteUsersMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteUsersMutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;