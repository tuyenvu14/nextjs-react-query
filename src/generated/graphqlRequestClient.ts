import { QueryClient } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

// const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;

const graphqlRequestClient = new GraphQLClient('http://localhost:4000/graphql', {
    credentials: 'include',
    mode: 'cors',
});

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 1000,
        },
    },
});

export default graphqlRequestClient;