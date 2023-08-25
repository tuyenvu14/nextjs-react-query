import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import { useStatisticBidSelectionPlansQuery } from '@/src/generated/graphql'
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
  const page = searchParams?.page ?? DEFAULT_PAGE_INDEX
  const pageSize = searchParams?.pageSize ?? DEFAULT_PAGE_SIZE
  await queryClient.prefetchQuery(
    useStatisticBidSelectionPlansQuery.getKey({
      where: {
        isLatest: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
    useStatisticBidSelectionPlansQuery.fetcher({
      where: {
        isLatest: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ContractorSelectionPlan />
    </Hydrate>
  )
}
