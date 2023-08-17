import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useProjectsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { InvestDevelop } from '@/src/features/project/investDevelop/InvestDevelop'

// const InvestDevelop = dynamic(() =>
//   import('@/src/features/project/investDevelop/InvestDevelop').then((mod) => mod.InvestDevelop),
// )

export default async function Page() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    useProjectsQuery.getKey({
      where: {},
      skip: 0,
      take: 10,
    }),
    useProjectsQuery.fetcher({
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
function useQueryParams(arg0: {}): [any, any] {
  throw new Error('Function not implemented.')
}
