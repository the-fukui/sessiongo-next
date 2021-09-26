import * as Types from '../@types/gql-types.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetProfileQueryVariables = Types.Exact<{
  auth_id: Types.Scalars['String'];
}>;


export type GetProfileQuery = { users_by_pk?: Types.Maybe<{ name?: Types.Maybe<string>, user_name: string }> };


export const GetProfileDocument = gql`
    query GetProfile($auth_id: String!) {
  users_by_pk(auth_id: $auth_id) {
    name
    user_name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetProfile(variables: GetProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProfileQuery>(GetProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProfile');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;