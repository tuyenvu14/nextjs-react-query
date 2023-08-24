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
export const Package = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Tên gói thầu',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: 'Lĩnh vực LCNT',
      dataIndex: 'field',
      key: 'field',
      width: 250,
    },
    {
      title: 'Hình thức LCNT',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Chi tiết nguồn vốn',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Phương thức LCNT',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Thời gian bắt đầu tổ chức LCNT',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Loại hợp đồng',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Địa phương',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Thời gian thực hiện hợp đồng',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Giá gói thầu',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Trạng thái',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
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
  return <Table scroll={{ x: '100vw' }} columns={columns} dataSource={data} />
}
