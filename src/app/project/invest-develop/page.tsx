import { InvestDevelop } from '@/src/features/project/investDevelop/InvestDevelop'
import { useIdeasQuery } from '@/src/generated/graphql'
import getQueryClient from '@/src/utils/getQueryClient'
import { Hydrate, dehydrate } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

// const InvestDevelop = dynamic(() =>
//   import('@/src/features/project/investDevelop/InvestDevelop').then((mod) => mod.InvestDevelop),
// )

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
      <InvestDevelop />
    </Hydrate>
  )
}
