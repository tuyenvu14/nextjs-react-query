import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface IContractorFailPackageListProps {
  data: any
}

export const ContractorFailPackageList = (props: IContractorFailPackageListProps) => {
  const columns: ColumnsType<any> = [
    {
      title: 'Gói thầu',
      dataIndex: 'name',
      key: 'stt',
      width: 200,
    },
    {
      title: 'Công ty/ tổ chức liên doanh',
      dataIndex: 'company',
      key: 'name',
      width: 200,
    },
    {
      title: 'Thời gian công bố',
      dataIndex: 'time',
      key: 'field',
    },
    {
      title: 'Giá dự toán',
      dataIndex: 'priceForecast',
      key: 'field',
    },

    {
      title: 'Giá gói thầu ',
      dataIndex: 'price',
      key: 'field',
    },
  ]

  const data: any[] = [
    {
      key: '1',
      name: 'Cung cấp dầu phục vụ sản xuất điện cho Công ty Nhiệt điện Cần Thơ năm 2023',
      company: 'Cung cấp dầu phục vụ sản xuất điện cho Công ty Nhiệt điện Cần Thơ năm 2023',
      time: '12:00 23/07/2023',
      priceForecast: '100.000 VND',
      price: '200.000 VND',
    },
  ]
  return (
    <>
      <p>
        <span className="font-bold">Tổng kết</span>: Bên nhà thầu Trung tâm Nghiên cứu Dâu tằm tơ
        trung ương đã trượt<span className="font-bold">&nbsp;1&nbsp;</span>gói thầu, tỷ lệ trung
        bình giá trượt thầu so với giá dự toán:<span className="font-bold">&nbsp;67.5%</span>, tỷ lệ
        chào giá thấp nhất là<span className="font-bold">&nbsp;60%</span>
      </p>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
