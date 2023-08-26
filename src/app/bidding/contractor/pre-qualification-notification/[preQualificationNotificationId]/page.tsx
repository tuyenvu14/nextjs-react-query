import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticBidNotificationResultQuery } from '@/src/generated/graphql'
import { PreQualificationNotificationDetail } from '@/src/features/bidding/contractor/pre-qualification-notification/PreQualificationNotificationDetail'

// const ContractorSelectionPlanDetail = dynamic(() =>
//   import(
//     '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
//   ).then((mod) => mod.ContractorSelectionPlanDetail),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { preQualificationNotificationId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    useStatisticBidNotificationResultQuery.getKey({
      where: { id: params.preQualificationNotificationId },
    }),
    useStatisticBidNotificationResultQuery.fetcher({
      where: { id: params.preQualificationNotificationId },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <PreQualificationNotificationDetail searchParams={searchParams} params={params} />
    </Hydrate>
  )
}
