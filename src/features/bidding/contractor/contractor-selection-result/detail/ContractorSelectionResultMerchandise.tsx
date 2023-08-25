import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface IContractorSelectionResultMerchandiseProps {
  data: any
}

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

export const ContractorSelectionResultMerchandise = (
  props: IContractorSelectionResultMerchandiseProps,
) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: 'Tên hàng hóa',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Khối lượng',
      dataIndex: 'field',
      key: 'field',
      width: 200,
    },
    {
      title: 'Đơn vị tính',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Xuất xứ',
      dataIndex: 'field',
      key: 'field',
      width: 100,
    },

    {
      title: 'Giá/ Đơn giá trúng thầu',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Tên chương',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Hành động',
      dataIndex: 'field',
      key: 'field',
      render: () => <div className="text-main">Xem chi tiết</div>,
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
  return <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />
}
