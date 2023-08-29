import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface IContractorPackageListProps {
  data: any
}

export const ContractorPackageList = (props: IContractorPackageListProps) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Gói thầu',
      dataIndex: 'stt',
      key: 'stt',
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: 'Bên mời thầu',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Số tiền',
      dataIndex: 'field',
      key: 'field',
      width: 200,
    },
    {
      title: 'Thời gian',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Giai đoạn gần nhất',
      dataIndex: 'field',
      key: 'field',
      width: 100,
    },

    {
      title: 'Vai trò nhà thầu',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Trạng thái',
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
  return (
    <>
      <p>
        <span className="font-bold">Tổng kết</span>: Bên nhà thầu Trung tâm Nghiên cứu Dâu tằm tơ
        trung ương đã tham gia
        <span className="font-bold">&nbsp;3&nbsp;</span>
        gói thầu, trúng<span className="font-bold">&nbsp;2&nbsp;</span>gói, trượt
        <span className="font-bold">&nbsp;2&nbsp;</span>gói,
        <span className="font-bold">&nbsp;1&nbsp;</span>gói chưa có kết quả,
        <span className="font-bold">&nbsp;1&nbsp;</span>gói đã hủy
      </p>
      <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />
    </>
  )
}
