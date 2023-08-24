import React from 'react'
import { Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}
export const TenderNotice = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Mã TBMST',
      dataIndex: 'stt',
      key: 'stt',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tên dự án',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: 'Tên gói thầu',
      dataIndex: 'field',
      key: 'field',
      width: 250,
    },
    {
      title: 'Thời gian công bố',
      dataIndex: 'field',
      key: 'field',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  return <Table scroll={{ x: 500 }} columns={columns} dataSource={data} />
}
