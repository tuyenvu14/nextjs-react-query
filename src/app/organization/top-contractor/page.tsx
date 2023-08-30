import { dehydrate } from '@tanstack/query-core'
import Hydrate from '@/src/utils/hydrate.client'
import getQueryClient from '@/src/utils/getQueryClient'
import {
  SortOrder,
  useStatisticAnalysisQuery,
  useStatisticOrganizationsQuery,
} from '@/src/generated/graphql'
import dynamic from 'next/dynamic'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
// import { TopContractor } from '@/src/features/search-organization/top-contractor/TopContractor'

const TopContractor = dynamic(() =>
  import('@/src/features/search-organization/top-contractor/TopContractor').then(
    (mod) => mod.TopContractor,
  ),
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
    useStatisticAnalysisQuery.getKey(),
    useStatisticAnalysisQuery.fetcher(),
  )

  await queryClient.prefetchQuery(
    useStatisticOrganizationsQuery.getKey({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          winBidPackages: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
    useStatisticOrganizationsQuery.fetcher({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          winBidPackages: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
  )

  await queryClient.prefetchQuery(
    useStatisticOrganizationsQuery.getKey({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          loseBidPackages: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
    useStatisticOrganizationsQuery.fetcher({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          loseBidPackages: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
  )

  await queryClient.prefetchQuery(
    useStatisticOrganizationsQuery.getKey({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          watchedStatuses: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
    useStatisticOrganizationsQuery.fetcher({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          watchedStatuses: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
  )

  await queryClient.prefetchQuery(
    useStatisticOrganizationsQuery.getKey({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          attendedBidPackages: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
    useStatisticOrganizationsQuery.fetcher({
      where: {
        isContractor: {
          equals: true,
        },
      },
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: [
        {
          attendedBidPackages: {
            sort: SortOrder.Desc,
          },
        },
      ],
    }),
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <TopContractor />
    </Hydrate>
  )
}
