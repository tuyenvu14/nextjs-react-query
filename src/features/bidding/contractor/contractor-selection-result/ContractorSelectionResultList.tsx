'use client'
import React from 'react'
import {
  StatisticBidNotificationResult,
  useStatisticBidNotificationResultsQuery,
} from '@/src/generated/graphql'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { useUpdateSearch } from '@/src/hooks/useSearchParams'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import Table, { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import { biddingContractorSelectionResult } from '@/src/constants/routes'

export default function ContractorSelectionResultList() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { handleSearchClick } = useUpdateSearch(pathname, router)
  const page = searchParams.get('page') ?? `${DEFAULT_PAGE_INDEX}`
  const pageSize = searchParams.get('pageSize') ?? `${DEFAULT_PAGE_SIZE}`
  const { data: statisticBidNotificationResults } = useStatisticBidNotificationResultsQuery({
    where: {
      isLatest: {
        equals: true,
      },
      bidNotification: {
        isPreNotification: {
          equals: false,
        },
      },
    },
    skip: (+page - 1) * +pageSize,
    take: +pageSize,
  })

  const columns: ColumnsType<StatisticBidNotificationResult> = [
    {
      title: 'Tên gói thầu',
      dataIndex: 'bidNotification',
      width: 250,
      render: (_, object) => <div>{object?.bidNotification?.bidPackage?.name}</div>,
    },
    {
      title: 'Bên mời thầu',
      dataIndex: 'bidNotification',
      width: 200,
      render: (_, object) => (
        <div>{object?.bidNotification?.bidPackage?.bidSelectionPlan?.procuringEntityName}</div>
      ),
    },
    {
      title: 'Thời gian công bố',
      dataIndex: 'publishedAt',
      width: 250,
    },
    {
      title: 'Nhà thầu được chọn',
      dataIndex: 'selectedContractors',
      width: 200,
      render: (_, object) => (
        <div>
          {object?.selectedContractors?.map((value, index) => (
            <div key={index}>{value?.name}</div>
          ))}
        </div>
      ),
    },
    {
      title: 'Hành động',
      dataIndex: 'id',
      width: 150,
      render: (text) => (
        <Link
          href={`${biddingContractorSelectionResult}/${text}`}
          className="text-main hover:text-main"
        >
          Xem chi tiết
        </Link>
      ),
    },
  ]

  return (
    <>
      <div className="md:col-span-3  lg:col-span-2">
        <p className="mb-2 text-2xl font-semibold text-primary">Kết quả lựa chọn nhà thầu</p>
        <p style={{ borderBottomWidth: 1 }} className="text-lg font-normal mb-4">
          Kết quả (
          {statisticBidNotificationResults?.statisticBidNotificationResults?.totalCount ?? '-'})
        </p>
        <Table
          scroll={{ x: 1100 }}
          columns={columns}
          dataSource={statisticBidNotificationResults?.statisticBidNotificationResults.nodes as any}
          pagination={{
            hideOnSinglePage: true,
            showSizeChanger: true,
            size: 'default',
            current: parseInt(page ?? `${DEFAULT_PAGE_INDEX}`),
            pageSize: parseInt(pageSize ?? `${DEFAULT_PAGE_SIZE}`),
            total: statisticBidNotificationResults?.statisticBidNotificationResults?.totalCount,
            pageSizeOptions: ['10', '30', '50'],
            onShowSizeChange: () => {},
            onChange: (page, pageSize) => handleSearchClick({ page, pageSize }),
          }}
        />
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
