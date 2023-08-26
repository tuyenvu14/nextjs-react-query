'use client'
import React from 'react'
import {
  StatisticBidNotification,
  useStatisticBidNotificationsQuery,
} from '@/src/generated/graphql'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { useUpdateSearch } from '@/src/hooks/useSearchParams'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import Table, { ColumnsType } from 'antd/es/table'
import Link from 'next/link'
import { biddingContractorPreQualificationNotification } from '@/src/constants/routes'

export default function PreQualificationNotificationList() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { handleSearchClick } = useUpdateSearch(pathname, router)
  const page = searchParams.get('page') ?? `${DEFAULT_PAGE_INDEX}`
  const pageSize = searchParams.get('pageSize') ?? `${DEFAULT_PAGE_SIZE}`
  const { data: statisticBidNotifications } = useStatisticBidNotificationsQuery({
    where: {
      isLatest: {
        equals: true,
      },
      isPreNotification: {
        equals: false,
      },
    },
    skip: (+page - 1) * +pageSize,
    take: +pageSize,
  })

  const columns: ColumnsType<StatisticBidNotification> = [
    {
      title: 'Tên dự án',
      dataIndex: 'bidPackage',
      width: 250,
      render: (_, object) => <div>{object?.bidPackage?.bidSelectionPlan?.project?.name}</div>,
    },
    {
      title: 'TBMST/ MQT',
      dataIndex: 'code',
      width: 200,
    },
    {
      title: 'Thời gian công bố',
      dataIndex: 'openDate',
      width: 250,
    },
    {
      title: 'Hành động',
      dataIndex: 'id',
      width: 150,
      render: (text) => (
        <Link
          href={`${biddingContractorPreQualificationNotification}/${text}`}
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
        <p className="mb-2 text-2xl font-semibold text-primary">Thông báo mời sơ tuyển</p>
        <p style={{ borderBottomWidth: 1 }} className="text-lg font-normal mb-4">
          Kết quả ({statisticBidNotifications?.statisticBidNotifications?.totalCount ?? '-'})
        </p>
        <Table
          scroll={{ x: 1100 }}
          columns={columns}
          dataSource={statisticBidNotifications?.statisticBidNotifications.nodes as any}
          pagination={{
            hideOnSinglePage: true,
            showSizeChanger: true,
            size: 'default',
            current: parseInt(page ?? `${DEFAULT_PAGE_INDEX}`),
            pageSize: parseInt(pageSize ?? `${DEFAULT_PAGE_SIZE}`),
            total: statisticBidNotifications?.statisticBidNotifications?.totalCount,
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
