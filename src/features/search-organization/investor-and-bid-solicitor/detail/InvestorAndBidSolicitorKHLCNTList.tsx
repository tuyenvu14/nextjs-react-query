'use client'

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import {
  SortOrder,
  StatisticBidSelectionPlan,
  StatisticOrganization,
  useStatisticBidSelectionPlansQuery,
  useStatisticOrganizationsQuery,
} from '@/src/generated/graphql'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface IInvestorAndBidSolicitorKHLCNTListProps {
  procuringEntityCode: string
}

export const InvestorAndBidSolicitorKHLCNTList = ({
  procuringEntityCode,
}: IInvestorAndBidSolicitorKHLCNTListProps) => {
  const [page, setPage] = useState(DEFAULT_PAGE_INDEX)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  const searchParams = useSearchParams()
  const { data: statisticBidSelectionPlans } = useStatisticBidSelectionPlansQuery({
    where: {
      procuringEntityCode: {
        equals: procuringEntityCode,
      },
    },
    skip: (+page - 1) * +pageSize,
    take: +pageSize,
    orderBy: [
      {
        publishedAt: {
          sort: SortOrder.Desc,
        },
      },
    ],
  })

  const columns: ColumnsType<StatisticBidSelectionPlan> = [
    {
      title: 'Tên kế hoạch lựa chọn nhà thầu',
      dataIndex: 'name',
      width: 300,
    },
    {
      title: 'Tên dự án',
      dataIndex: 'project',
      render: (_, object) => <div>{object?.project?.name}</div>,
      width: 200,
    },
    {
      title: 'Thời gian công bố',
      dataIndex: 'project',
      render: (_, object) => <div>{object?.project?.publishedAt}</div>,
      align: 'right',
    },
    {
      title: 'Số gói thầu',
      dataIndex: 'bidPackagesAmount',
      align: 'right',
    },
  ]
  return (
    <>
      <p>
        <span className="font-bold">Tổng kết</span>: Bên mời thầu Trung tâm Nghiên cứu Dâu tằm tơ
        trung ương đã đăng tải <span className="font-bold">2</span> KHLCNT, trong đó có
        <span className="font-bold">11</span> gói thầu.
      </p>
      <Table
        columns={columns}
        dataSource={statisticBidSelectionPlans?.statisticBidSelectionPlans?.nodes as any}
        pagination={{
          hideOnSinglePage: true,
          showSizeChanger: true,
          size: 'default',
          current: page,
          pageSize: pageSize,
          total: statisticBidSelectionPlans?.statisticBidSelectionPlans?.totalCount,
          pageSizeOptions: ['10', '30', '50'],
          onShowSizeChange: () => {},
          onChange: (page, pageSize) => {
            setPage(page)
            setPageSize(pageSize)
          },
        }}
      />
    </>
  )
}
