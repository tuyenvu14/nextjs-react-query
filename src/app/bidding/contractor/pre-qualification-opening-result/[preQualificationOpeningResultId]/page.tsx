import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useBidOpenPreNotificationResultQuery } from '@/src/generated/graphql'
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
  params: { preQualificationOpeningResultId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    useBidOpenPreNotificationResultQuery.getKey({
      where: { id: params.preQualificationOpeningResultId },
    }),
    useBidOpenPreNotificationResultQuery.fetcher({
      where: { id: params.preQualificationOpeningResultId },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <PreQualificationDetailComponent
        searchParams={searchParams}
        params={{ id: params.preQualificationOpeningResultId }}
        isOpenPreNotificationResult={true}
      />
    </Hydrate>
  )
}
