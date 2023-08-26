import { CopyIcon } from '@/src/components/icons'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface IPreQualificationContractorsProps {
  data: any
}

export const PreQualificationContractors = (props: IPreQualificationContractorsProps) => {
  const columns: ColumnsType<any> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: 'Số ĐKKD',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Tên liên doanh',
      dataIndex: 'field',
      key: 'field',
      width: 200,
    },
    {
      title: 'Tên công ty / Tổ chức',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Địa chỉ',
      dataIndex: 'field',
      key: 'field',
      width: 100,
    },

    {
      title: 'Nơi đăng ký hoạt động',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Hiệu lực HSQT (Ngày)',
      dataIndex: 'field',
      key: 'field',
    },
  ]

  const data: any[] = [
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
  return <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />
}
