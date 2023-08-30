import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticOrganizationQuery } from '@/src/generated/graphql'
import { ContractorDetail } from '@/src/features/search-organization/contractor/ContractorDetail'

// const ContractorSelectionPlanDetail = dynamic(() =>
//   import(
//     '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
//   ).then((mod) => mod.ContractorSelectionPlanDetail),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { organizationId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    useStatisticOrganizationQuery.getKey({
      where: { id: params.organizationId },
    }),
    useStatisticOrganizationQuery.fetcher({
      where: { id: params.organizationId },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ContractorDetail searchParams={searchParams} params={params} />
    </Hydrate>
  )
}
