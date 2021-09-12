import * as Types from '../@types/gql-types.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type CreateUsersMutationMutationVariables = Types.Exact<{
  createUsersData: Types.UsersUncheckedCreateInput;
}>;


export type CreateUsersMutationMutation = { createUsers: { id: number } };


export const CreateUsersMutationDocument = gql`
    mutation CreateUsersMutation($createUsersData: UsersUncheckedCreateInput!) {
  createUsers(data: $createUsersData) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateUsersMutation(variables: CreateUsersMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUsersMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUsersMutationMutation>(CreateUsersMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUsersMutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;