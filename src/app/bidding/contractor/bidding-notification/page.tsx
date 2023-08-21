import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useProjectsQuery, useStatisticBidNotificationsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { BiddingNotification } from '@/src/features/bidding/contractor/bidding-notification/BiddingNotification'

const BiddingNotification = dynamic(() =>
  import('@/src/features/bidding/contractor/bidding-notification/BiddingNotification').then(
    (mod) => mod.BiddingNotification,
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
  // console.log(searchParams)
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
      skip: DEFAULT_PAGE_INDEX,
      take: DEFAULT_PAGE_SIZE,
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
      skip: DEFAULT_PAGE_INDEX,
      take: DEFAULT_PAGE_SIZE,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <BiddingNotification />
    </Hydrate>
  )
}
