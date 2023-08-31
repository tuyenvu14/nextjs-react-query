'use client'

import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import {
  OrganizationBusiness,
  useStatisticOrganizationBusinessesQuery,
} from '@/src/generated/graphql'
import Table, { ColumnsType } from 'antd/es/table'
import { useState } from 'react'

interface IContractorIndustryProps {
  organizationCode: string
}

export const ContractorIndustry = ({ organizationCode }: IContractorIndustryProps) => {
  const [page, setPage] = useState(DEFAULT_PAGE_INDEX)
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)
  // const searchParams = useSearchParams()
  const { data: statisticOrganizationBusinesses } = useStatisticOrganizationBusinessesQuery({
    where: {
      organizationCode: {
        equals: organizationCode,
      },
    },
    skip: (+page - 1) * +pageSize,
    take: +pageSize,
  })

  const columns: ColumnsType<OrganizationBusiness> = [
    {
      title: 'STT',
      dataIndex: 'key',
      width: 50,
    },
    {
      title: 'Tên ngành nghề ',
      dataIndex: 'business',
      render: (_) => _?.name,
    },
  ]

  return (
    <>
      <Table
        columns={columns}
        dataSource={statisticOrganizationBusinesses?.statisticOrganizationBusinesses?.nodes as any}
        pagination={{
          hideOnSinglePage: true,
          showSizeChanger: true,
          size: 'default',
          current: page,
          pageSize: pageSize,
          total: statisticOrganizationBusinesses?.statisticOrganizationBusinesses?.totalCount,
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
