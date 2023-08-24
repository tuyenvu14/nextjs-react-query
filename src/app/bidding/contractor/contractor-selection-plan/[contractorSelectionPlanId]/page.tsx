import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useBidNotificationQuery, useStatisticBidSelectionPlanQuery } from '@/src/generated/graphql'
import { ContractorSelectionPlanDetail } from '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
import dynamic from 'next/dynamic'

// const ContractorSelectionPlanDetail = dynamic(() =>
//   import(
//     '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
//   ).then((mod) => mod.ContractorSelectionPlanDetail),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { contractorSelectionPlanId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  // use prefetchQuery when search query
  // console.log(searchParams, params)
  await queryClient.prefetchQuery(
    useStatisticBidSelectionPlanQuery.getKey({
      where: { id: params.contractorSelectionPlanId },
    }),
    useStatisticBidSelectionPlanQuery.fetcher({
      where: { id: params.contractorSelectionPlanId },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ContractorSelectionPlanDetail searchParams={searchParams} params={params} />
    </Hydrate>
  )
}
