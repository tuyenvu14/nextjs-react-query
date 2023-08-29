import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface IContractorsCompetitivelyBidListProps {
  data: any
}

export const ContractorsCompetitivelyBidList = (props: IContractorsCompetitivelyBidListProps) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Nhà thầu',
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
      width: 200,
    },
    {
      title: 'Số gói thầu đã hủy  ',
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
        <span className="font-bold">Tổng kết</span>: Bên nhà thầu Trung tâm Nghiên cứu Dâu tằm tơ
        trung ương đã từng đấu với <span className="font-bold">2164</span> nhà thầu trong{' '}
        <span className="font-bold">1950</span> gói thầu, thắng thầu{' '}
        <span className="font-bold">155</span> gói, thua <span className="font-bold">1462</span>{' '}
        gói, <span className="font-bold">276</span> gói thầu chưa có kết quả,{' '}
        <span className="font-bold">57</span>
        gói thầu đã huỷ.
      </p>
      <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />
    </>
  )
}
