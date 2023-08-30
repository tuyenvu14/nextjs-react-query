import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticOrganizationQuery } from '@/src/generated/graphql'
import { InvestorAndBidSolicitorDetail } from '@/src/features/search-organization/investor-and-bid-solicitor/InvestorAndBidSolicitorDetail'

// const ContractorSelectionPlanDetail = dynamic(() =>
//   import(
//     '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
//   ).then((mod) => mod.ContractorSelectionPlanDetail),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { code: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    useStatisticOrganizationQuery.getKey({
      where: { code: params.code },
    }),
    useStatisticOrganizationQuery.fetcher({
      where: { code: params.code },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <InvestorAndBidSolicitorDetail searchParams={searchParams} params={params} />
    </Hydrate>
  )
}
