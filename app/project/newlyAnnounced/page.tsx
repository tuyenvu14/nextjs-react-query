import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useIdeasQuery } from '@/src/generated/graphql'
import NewlyAnnounced from '@/src/features/project/newlyAnnounced/NewlyAnnounced'

export default async function Page() {
  const queryClient = getQueryClient()
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
      <NewlyAnnounced />
    </Hydrate>
  )
}
