import { GraphQLClient } from 'graphql-request'
import storage from '../utils/storage'

export const graphqlRequest = async (query: any, variables?: any) => {
  // const token = storage.getToken()

  let headers = {}

  if (false) {
    headers = {
      authorization: `Bearer ${storage.getToken()}`
    }
  }

  const graphqlRequestClient = new GraphQLClient('http://localhost:4000/graphql', {})

  // return await graphqlRequestClient.request(query, variables, headers)
  try {
    return await graphqlRequestClient.request(query, variables, headers)
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2))
    throw error
  }
}
