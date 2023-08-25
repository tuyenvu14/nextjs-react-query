'use client'
import React from 'react'
import {
  StatisticBidSelectionPlan,
  useStatisticBidSelectionPlansQuery,
} from '@/src/generated/graphql'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { FooterList } from '@/src/components/project/FooterList'
import { useUpdateSearch } from '@/src/hooks/useSearchParams'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import { ContractorSelectionPlanItem } from '@/src/components/project/ContractorSelectionPlanItem'

export default function ContractorSelectionPlanList() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { handleSearchClick } = useUpdateSearch(pathname, router)
  const page = searchParams.get('page') ?? `${DEFAULT_PAGE_INDEX}`
  const pageSize = searchParams.get('pageSize') ?? `${DEFAULT_PAGE_SIZE}`

  const { data: statisticBidSelectionPlans } = useStatisticBidSelectionPlansQuery({
    where: {
      isLatest: {
        equals: true,
      },
    },
    skip: (+page - 1) * +pageSize,
    take: +pageSize,
  })

  return (
    <>
      <div className="lg:col-span-2">
        <p className="mb-2 text-2xl font-semibold text-primary">Kế hoạch lựa chọn nhà thầu</p>
        <p style={{ borderBottomWidth: 1 }} className="text-lg font-normal mb-4">
          Kết quả ({statisticBidSelectionPlans?.statisticBidSelectionPlans?.totalCount ?? '-'})
        </p>
        {statisticBidSelectionPlans?.statisticBidSelectionPlans?.nodes?.map((data) => (
          <div className="mb-4" key={data.id}>
            <ContractorSelectionPlanItem data={data as StatisticBidSelectionPlan} />
          </div>
        ))}
        <div>
          <FooterList
            onPageChange={(page: number, pageSize: number) =>
              handleSearchClick({
                page,
                pageSize,
              })
            }
            pagination={{
              pageIndex: parseInt(page ?? `${DEFAULT_PAGE_INDEX}`),
              pageSize: parseInt(pageSize ?? `${DEFAULT_PAGE_SIZE}`),
              total: statisticBidSelectionPlans?.statisticBidSelectionPlans?.totalCount,
            }}
          />
        </div>
      </div>
      <div className="lg:col-span-1">
        <DataAnalysis
          data={{
            count1: '276.268.005',
            count2: '276.268.005',
            count3: '276.268.005',
            count4: '276.268.005',
          }}
        />
      </div>
    </>
  )
}
