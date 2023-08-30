import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import {
  useStatisticBidNotificationsQuery,
  useStatisticOrganizationsQuery,
} from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { Contractor } from '@/src/features/search-organization/contractor/Contractor'

const Contractor = dynamic(() =>
  import('@/src/features/search-organization/contractor/Contractor').then((mod) => mod.Contractor),
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
    useStatisticOrganizationsQuery.getKey({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
    }),
    useStatisticOrganizationsQuery.fetcher({
      where: {
        isContractor: {
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
      <Contractor />
    </Hydrate>
  )
}
