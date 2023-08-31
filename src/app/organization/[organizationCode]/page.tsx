import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticOrganizationQuery } from '@/src/generated/graphql'
import { OrganizationDetail } from '@/src/features/organization/OrganizationDetail'

// const ContractorSelectionPlanDetail = dynamic(() =>
//   import(
//     '@/src/features/bidding/contractor/contractor-selection-plan/ContractorSelectionPlanDetail'
//   ).then((mod) => mod.ContractorSelectionPlanDetail),
// )

export default async function Page({
  params,
  searchParams,
}: {
  params: { organizationCode: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(
    useStatisticOrganizationQuery.getKey({
      where: { id: params.organizationCode },
    }),
    useStatisticOrganizationQuery.fetcher({
      where: { id: params.organizationCode },
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <OrganizationDetail searchParams={searchParams} params={params} />
    </Hydrate>
  )
}
