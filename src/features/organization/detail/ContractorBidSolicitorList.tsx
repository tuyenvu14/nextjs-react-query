import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface IContractorBidSolicitorListProps {
  data: any
}

export const ContractorBidSolicitorList = (props: IContractorBidSolicitorListProps) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Bên mời thầu',
      dataIndex: 'stt',
      key: 'stt',
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: 'Tổng số gói đã thầu đã đấu thầu',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Số gói thầu đã trúng',
      dataIndex: 'field',
      key: 'field',
      width: 200,
    },
    {
      title: 'Số gói thầu đã trượt',
      dataIndex: 'field',
      key: 'field',
    },

    {
      title: 'Số gói thầu chưa có kết quả',
      dataIndex: 'field',
      key: 'field',
      width: 100,
    },
    {
      title: 'Số gói thầu đã hủy',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Tổng giá trị trúng thầu',
      dataIndex: 'field',
      key: 'field',
    },
    {
      title: 'Tỷ lệ giá trúng thầu với giá dự toán',
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
        <span className="font-bold">Tổng kết</span>: Tổng kết: Bên nhà thầu Trung tâm Nghiên cứu Dâu
        tằm tơ trung ương đã có quan hệ với<span className="font-bold">&nbsp;3&nbsp;</span>bên mời
        thầu.
      </p>
      <Table scroll={{ x: 1300 }} columns={columns} dataSource={data} />
    </>
  )
}
