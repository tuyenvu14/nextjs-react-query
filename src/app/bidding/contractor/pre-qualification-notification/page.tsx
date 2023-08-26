import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticBidNotificationsQuery } from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { PreQualificationNotification } from '@/src/features/bidding/contractor/pre-qualification-notification/PreQualificationNotification'
// import { ContractorSelectionResult } from '@/src/features/bidding/contractor/contractor-selection-result/ContractorSelectionResult'

const PreQualificationNotification = dynamic(() =>
  import(
    '@/src/features/bidding/contractor/pre-qualification-notification/PreQualificationNotification'
  ).then((mod) => mod.PreQualificationNotification),
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
      <PreQualificationNotification />
    </Hydrate>
  )
}
