import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticBidNotificationsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { BiddingOpeningResult } from '@/src/features/bidding/contractor/bidding-opening-result/BiddingOpeningResult'
// import { BiddingNotification } from '@/src/features/bidding/contractor/bidding-notification/BiddingNotification'

const BiddingOpeningResult = dynamic(() =>
  import('@/src/features/bidding/contractor/bidding-opening-result/BiddingOpeningResult').then(
    (mod) => mod.BiddingOpeningResult,
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
  // use prefetchQuery when search query
  const page = searchParams?.page ?? DEFAULT_PAGE_INDEX
  const pageSize = searchParams?.pageSize ?? DEFAULT_PAGE_SIZE
  await queryClient.prefetchQuery(
    useStatisticBidNotificationsQuery.getKey({
      where: {
        isLatest: {
          equals: true,
        },
        isPreNotification: {
          equals: false,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
    useStatisticBidNotificationsQuery.fetcher({
      where: {
        isLatest: {
          equals: true,
        },
        isPreNotification: {
          equals: false,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <BiddingOpeningResult />
    </Hydrate>
  )
}
