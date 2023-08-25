import { Tabs, TabsProps } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'

interface IContractorSelectionResultRelatedInfoProps {
  data: any
}

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

export const ContractorSelectionResultRelatedInfo = (
  props: IContractorSelectionResultRelatedInfoProps,
) => {
  const onChange = (key: string) => {
    // console.log(key)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: 'Mã định danh',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Tên liên danh',
      dataIndex: 'field',
      key: 'field',
      width: 200,
    },
    {
      title: 'Tên nhà thầu',
      dataIndex: 'field',
      key: 'field',
      width: 100,
    },
    {
      title: 'Giá dự thầu',
      dataIndex: 'field',
      key: 'field',
      width: 100,
    },
    {
      title: 'Điểm kĩ thuật',
      dataIndex: 'field',
      key: 'field',
      width: 100,
    },
    {
      title: 'Giá trúng thầu',
      dataIndex: 'field',
      key: 'field',
      width: 150,
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
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Nhà thầu đã trúng',
      children: <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />,
    },
    {
      key: '2',
      label: 'Nhà thầu không trúng',
      children: <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />,
    },
  ]
  return (
    <div className="px-4 text-sm">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
