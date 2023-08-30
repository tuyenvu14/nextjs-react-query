'use client'

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import {
  SortOrder,
  StatisticOrganization,
  useStatisticOrganizationsQuery,
} from '@/src/generated/graphql'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface ITopLoseContractorProps {
  //   data: any
}

export const TopLoseContractor = (props: ITopLoseContractorProps) => {
  const [page, setPage] = useState(DEFAULT_PAGE_INDEX)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  //   const router = useRouter()
  //   const pathname = usePathname()
  const searchParams = useSearchParams()
  //   const { handleSearchClick } = useUpdateSearch(pathname, router)
  //   const page = searchParams.get('page') ?? `${DEFAULT_PAGE_INDEX}`
  //   const pageSize = searchParams.get('pageSize') ?? `${DEFAULT_PAGE_SIZE}`
  const { data: statisticOrganizations } = useStatisticOrganizationsQuery({
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
  })

  const columns: ColumnsType<StatisticOrganization> = [
    {
      title: 'Nhà thầu',
      dataIndex: 'name',
      width: 400,
    },
    {
      title: 'Xếp hạng',
      dataIndex: 'name',
    },
    {
      title: 'Số gói thầu đã trượt',
      dataIndex: 'loseBidPackages',
      align: 'right',
    },
  ]
  return (
    <>
      <p className="font-semibold text-2xl text-center">Top nhà thầu trượt thầu</p>
      <Table
        columns={columns}
        dataSource={statisticOrganizations?.statisticOrganizations?.nodes as any}
        pagination={{
          hideOnSinglePage: true,
          showSizeChanger: true,
          size: 'default',
          current: page,
          pageSize: pageSize,
          total: statisticOrganizations?.statisticOrganizations?.totalCount,
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
