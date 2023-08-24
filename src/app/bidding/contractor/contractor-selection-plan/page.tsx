import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import {
  useProjectsQuery,
  useStatisticBidNotificationsQuery,
  useStatisticBidSelectionPlansQuery,
} from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { ContractorSelectionPlan } from '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlan'

const ContractorSelectionPlan = dynamic(() =>
  import(
    '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlan'
  ).then((mod) => mod.ContractorSelectionPlan),
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
    useStatisticBidSelectionPlansQuery.getKey({
      where: {
        isLatest: {
          equals: true,
        },
      },
      skip: DEFAULT_PAGE_INDEX,
      take: DEFAULT_PAGE_SIZE,
    }),
    useStatisticBidSelectionPlansQuery.fetcher({
      where: {
        isLatest: {
          equals: true,
        },
      },
      skip: DEFAULT_PAGE_INDEX,
      take: DEFAULT_PAGE_SIZE,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ContractorSelectionPlan />
    </Hydrate>
  )
}
