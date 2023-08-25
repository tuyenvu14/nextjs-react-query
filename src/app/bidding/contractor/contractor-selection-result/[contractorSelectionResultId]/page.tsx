import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticBidNotificationResultQuery } from '@/src/generated/graphql'
import { ContractorSelectionResultDetail } from '@/src/features/bidding/contractor/contractor-selection-result/ContractorSelectionResultDetail'

// const ContractorSelectionPlanDetail = dynamic(() =>
//   import(
//     '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
//   ).then((mod) => mod.ContractorSelectionPlanDetail),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { contractorSelectionResultId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  // use prefetchQuery when search query
  // console.log(searchParams, params)
  await queryClient.prefetchQuery(
    useStatisticBidNotificationResultQuery.getKey({
      where: { id: params.contractorSelectionResultId },
    }),
    useStatisticBidNotificationResultQuery.fetcher({
      where: { id: params.contractorSelectionResultId },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ContractorSelectionResultDetail searchParams={searchParams} params={params} />
    </Hydrate>
  )
}
