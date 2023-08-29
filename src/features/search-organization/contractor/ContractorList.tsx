'use client'
import React from 'react'
import {
  StatisticBidNotification,
  useStatisticBidNotificationsQuery,
  useStatisticOrganizationsQuery,
} from '@/src/generated/graphql'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { FooterList } from '@/src/components/project/FooterList'
import { useUpdateSearch } from '@/src/hooks/useSearchParams'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import { BiddingNotificationItem } from '@/src/components/project/BiddingNotificationItem'
import { ContractorItem } from '@/src/components/project/ContractorItem'
import { Button } from 'antd'
import { ChartIcon, CopyIcon } from '@/src/components/icons'

export default function ContractorList() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { handleSearchClick } = useUpdateSearch(pathname, router)
  const page = searchParams.get('page') ?? `${DEFAULT_PAGE_INDEX}`
  const pageSize = searchParams.get('pageSize') ?? `${DEFAULT_PAGE_SIZE}`

  const { data: statisticOrganizations } = useStatisticOrganizationsQuery({
    where: {
      isContractor: {
        equals: true,
      },
    },
    skip: (+page - 1) * +pageSize,
    take: +pageSize,
  })

  return (
    <>
      <div className="lg:col-span-2">
        <div style={{ borderBottomWidth: 1 }} className="pb-2">
          <Button type="primary" className=" text-white hover:!text-white" size="large">
            <ChartIcon className="mr-2" />
            Xem bảng thống kê
          </Button>
        </div>
        <p className="mb-2 text-2xl font-semibold text-primary">Nhà thầu</p>
        <p style={{ borderBottomWidth: 1 }} className="text-lg font-normal mb-4">
          Kết quả ({statisticOrganizations?.statisticOrganizations?.totalCount ?? '-'})
        </p>
        {statisticOrganizations?.statisticOrganizations?.nodes?.map((data) => (
          <div className="mb-4" key={data.id}>
            <ContractorItem data={data as any} />
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
              total: statisticOrganizations?.statisticOrganizations?.totalCount,
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
