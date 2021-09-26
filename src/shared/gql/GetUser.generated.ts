import * as Types from '../@types/gql-types.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetUserQueryVariables = Types.Exact<{
  userName: Types.Scalars['String'];
}>;


export type GetUserQuery = { users: Array<{ name?: Types.Maybe<string>, sessions: Array<{ id: number, title: string, slug: string }> }> };


export const GetUserDocument = gql`
    query GetUser($userName: String!) {
  users(where: {user_name: {_eq: $userName}}) {
    name
    sessions(order_by: {started_at: asc}) {
      id
      title
      slug
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;