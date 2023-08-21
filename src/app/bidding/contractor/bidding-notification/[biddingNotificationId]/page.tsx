import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import {
  useBidNotificationQuery,
  useProjectsQuery,
  useStatisticBidNotificationsQuery,
} from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import { BiddingNotificationDetail } from '@/src/features/bidding/contractor/bidding-notification/BiddingNotificationDetail'

// const BiddingNotificationDetail = dynamic(() =>
//   import('@/src/features/bidding/contractor/bidding-notification/BiddingNotificationDetail').then(
//     (mod) => mod.BiddingNotificationDetail,
//   ),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { biddingNotificationId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  // use prefetchQuery when search query
  // console.log(searchParams, params)
  await queryClient.prefetchQuery(
    useBidNotificationQuery.getKey({
      where: { id: params.biddingNotificationId },
    }),
    useBidNotificationQuery.fetcher({
      where: { id: params.biddingNotificationId },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <BiddingNotificationDetail searchParams={searchParams} params={params} />
    </Hydrate>
  )
}
