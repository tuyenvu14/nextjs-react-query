import { Tabs, TabsProps } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'

interface IInvestorAndBidSolicitorOperationProcessProps {
  // data: any
}

export const InvestorAndBidSolicitorOperationProcess = (
  props: IInvestorAndBidSolicitorOperationProcessProps,
) => {
  const onChange = (key: string) => {}

  const columns: ColumnsType<any> = [
    {
      title: 'Tên kế hoạch lựa chọn nhà thầu',
      dataIndex: 'name',
      width: 300,
    },
    {
      title: 'Tên dự án',
      dataIndex: 'field',
      width: 200,
    },
    {
      title: 'Thời gian công bố',
      dataIndex: 'field',
    },
    {
      title: 'Số gói thầu',
      dataIndex: 'field',
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
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Vai trò mời thầu',
      children: <Table columns={columns} dataSource={data} />,
    },
    {
      key: '2',
      label: 'Vai trò nhà đầu tư',
      children: <Table columns={columns} dataSource={data} />,
    },
    {
      key: '3',
      label: 'Vai trò nhà thầu',
      children: <Table columns={columns} dataSource={data} />,
    },
  ]
  return (
    <div className="px-4 text-sm">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
