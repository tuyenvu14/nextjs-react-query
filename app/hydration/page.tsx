import { dehydrate } from '@tanstack/query-core'
import ListUsers from './list-users'
import { User } from '../types'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useIdeasQuery } from '@/src/generated/graphql'

// async function getUsers() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users = (await res.json()) as User[]
//   return users
// }

export default async function Hydation() {
  const queryClient = getQueryClient()
  // await queryClient.prefetchQuery(['hydrate-users'], getUsers)
  await queryClient.prefetchQuery(
    useIdeasQuery.getKey({
      where: {},
      skip: 0,
      take: 10,
    }),
    useIdeasQuery.fetcher({
      where: {},
      skip: 0,
      take: 10,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  )
}
