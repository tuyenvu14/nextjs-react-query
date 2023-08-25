import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticBidNotificationResultsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { ContractorSelectionResult } from '@/src/features/bidding/contractor/contractor-selection-result/ContractorSelectionResult'

const ContractorSelectionResult = dynamic(() =>
  import(
    '@/src/features/bidding/contractor/contractor-selection-result/ContractorSelectionResult'
  ).then((mod) => mod.ContractorSelectionResult),
)

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  // use prefetchQuery when search query
  // console.log(searchParams)
  const page = searchParams?.page ?? DEFAULT_PAGE_INDEX
  const pageSize = searchParams?.pageSize ?? DEFAULT_PAGE_SIZE
  await queryClient.prefetchQuery(
    useStatisticBidNotificationResultsQuery.getKey({
      where: {
        isLatest: {
          equals: true,
        },
        bidNotification: {
          isPreNotification: {
            equals: false,
          },
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
    useStatisticBidNotificationResultsQuery.fetcher({
      where: {
        isLatest: {
          equals: true,
        },
        bidNotification: {
          isPreNotification: {
            equals: false,
          },
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ContractorSelectionResult />
    </Hydrate>
  )
}
