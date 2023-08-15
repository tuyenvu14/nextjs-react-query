import { graphqlRequest } from "./graphql-request"

export const useFetchData = <TData, TVariables>(query: string, variables?: TVariables, options?: RequestInit['headers']): (() => Promise<TData>) => {
  return async () => {
    return await graphqlRequest(query, variables) as TData
  }
}
