import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useProjectsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
// import { InvestDevelop } from '@/src/features/project/Project'

const InvestDevelop = dynamic(() =>
  import('@/src/features/project/Project').then((mod) => mod.Project),
)

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  // use in prefetchQuery when search query
  // console.log(searchParams)
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
