import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useBidOpenPreNotificationResultsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { PreQualificationOpeningResult } from '@/src/features/bidding/contractor/pre-qualification-opening-result/PreQualificationOpeningResult'

const PreQualificationOpeningResult = dynamic(() =>
  import('@/src/features/bidding/contractor/pre-qualification/PreQualificationOpeningResult').then(
    (mod) => mod.PreQualificationOpeningResult,
  ),
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
    useBidOpenPreNotificationResultsQuery.getKey({
      where: {
        isLatest: {
          equals: true,
        },
        isOpenPreNotificationResult: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
    useBidOpenPreNotificationResultsQuery.fetcher({
      where: {
        isLatest: {
          equals: true,
        },
        isOpenPreNotificationResult: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <PreQualificationOpeningResult />
    </Hydrate>
  )
}
