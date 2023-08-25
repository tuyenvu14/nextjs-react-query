import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useProjectsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
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
  const page = searchParams?.page ?? DEFAULT_PAGE_INDEX
  const pageSize = searchParams?.pageSize ?? DEFAULT_PAGE_SIZE
  await queryClient.prefetchQuery(
    useProjectsQuery.getKey({
      where: {},
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
    useProjectsQuery.fetcher({
      where: {},
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <InvestDevelop />
    </Hydrate>
  )
}
