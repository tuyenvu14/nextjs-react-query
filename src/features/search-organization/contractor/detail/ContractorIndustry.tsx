import { Tabs, TabsProps } from 'antd'
import Table, { ColumnsType } from 'antd/es/table'

interface IContractorIndustryProps {
  data: any
}

export const ContractorIndustry = (props: IContractorIndustryProps) => {
  const onChange = (key: string) => {}

  const columns: ColumnsType<any> = [
    {
      title: 'STT',
      dataIndex: 'key',
      width: 50,
    },
    {
      title: 'Tên ngành nghề ',
      dataIndex: 'name',
      key: 'name',
    },
  ]

  const data: any[] = [
    {
      key: '1',
      name: 'John Brown',
    },
    {
      key: '2',
      name: 'Jim Green',
    },
    {
      key: '3',
      name: 'Joe Black',
    },
  ]
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'THEO ĐKKD',
      children: <Table columns={columns} dataSource={data} />,
    },
    {
      key: '2',
      label: 'TRÊN MSC',
      children: <Table columns={columns} dataSource={data} />,
    },
  ]
  return (
    <div className="px-4 text-sm">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
