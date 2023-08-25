import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface IContractorSelectionResultContractProps {
  data: any
}

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

export const ContractorSelectionResultContract = (
  props: IContractorSelectionResultContractProps,
) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'key',
      key: 'stt',
      width: 100,
    },
    {
      title: 'Nhà thầu',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Ngày ký hợp đồng',
      dataIndex: 'field',
      key: 'field',
      width: 200,
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
  return <Table columns={columns} dataSource={data} />
}
