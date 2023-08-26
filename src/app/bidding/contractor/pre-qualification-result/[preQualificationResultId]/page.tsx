import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticBidNotificationResultQuery } from '@/src/generated/graphql'
import { PreQualificationDetailComponent } from '@/src/features/bidding/contractor/pre-qualification/PreQualificationDetailComponent'

// const ContractorSelectionPlanDetail = dynamic(() =>
//   import(
//     '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
//   ).then((mod) => mod.ContractorSelectionPlanDetail),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { preQualificationResultId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    useStatisticBidNotificationResultQuery.getKey({
      where: { id: params.preQualificationResultId },
    }),
    useStatisticBidNotificationResultQuery.fetcher({
      where: { id: params.preQualificationResultId },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <PreQualificationDetailComponent
        searchParams={searchParams}
        params={{ id: params.preQualificationResultId }}
        isOpenPreNotificationResult={false}
      />
    </Hydrate>
  )
}
