import { ZapIcon } from '@/src/components/icons'
import { Tabs, TabsProps } from 'antd'

interface IInvestorAndBidSolicitorAnalysisResultProps {
  //   data: any
}

export const InvestorAndBidSolicitorAnalysisResult = (
  props: IInvestorAndBidSolicitorAnalysisResultProps,
) => {
  const BiddingRole = () => {
    return (
      <div className=" text-sm">
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Có quan hệ với <span className="font-bold">0</span> nhà thầu.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã công bố <span className="font-bold">1</span> dự án đầu tư phát triển, trong đó có{' '}
            <span className="font-bold">0</span>
            dự án chưa công bố KHLCNT.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã công bố <span className="font-bold">2</span> kế hoạch lựa chọn nhà thầu với tổng số
            <span className="font-bold">11</span> gói thầu, trong đó có{' '}
            <span className="font-bold">1</span> KHLCNT chưa tìm thấy dự án đầu tư
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã thực hiện mời thầu <span className="font-bold">1</span> gói (với{' '}
            <span className="font-bold">1</span> thông báo mời thầu), thực hiện mời sơ tuyển{' '}
            <span className="font-bold">0</span> gói.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã công bố kết quả của <span className="font-bold">0</span> gói, hủy thầu{' '}
            <span className="font-bold">0</span> gói (trong số các gói thầu ở trên).
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Có <span className="font-bold">0</span> gói có kết quả mà không có TBMT, TBMST.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Có <span className="font-bold">11</span> gói chưa đăng tải đầy đủ kết quả lựa chọn nhà
            thầu.Trong đó có <span className="font-bold">10</span> gói thầu không tìm thấy TBMT
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Trung bình số nhà thầu tham gia mỗi gói thầu là: <span className="font-bold">1.00</span>{' '}
            nhà thầu.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tỉ lệ lĩnh vực mời thầu: Hàng hoá <span className="font-bold">100%</span>, Xây lắp{' '}
            <span className="font-bold">0%</span>, Tư vấn <span className="font-bold">0%</span>, Phi
            tư vấn <span className="font-bold">0%</span>, Hỗn hợp{' '}
            <span className="font-bold">0%</span>, Lĩnh vực khác{' '}
            <span className="font-bold">0%</span>.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tổng giá trị theo gói thầu có KQLCNT hợp lệ là: <span className="font-bold">0 VND</span>
            , trong đó tổng giá trị trúng thầu là: <span className="font-bold">0 VND</span>.
          </span>
        </div>
        <div className="">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tỉ lệ tiết kiệm là: <span className="font-bold">0%</span>.
          </span>
        </div>
      </div>
    )
  }

  const InvestorRole = () => {
    return (
      <div className="px-4 text-sm">
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Là chủ đầu tư của <span className="font-bold">0</span> dự án đầu tư phát triển.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Là chủ đầu tư của <span className="font-bold">2</span> KHLCNT trong đó có{' '}
            <span className="font-bold">2</span> KHLCNT tự đăng tải, có{' '}
            <span className="font-bold">0</span> KHLCNT là do đơn vị khác đăng tải.
          </span>
        </div>
        <div className="">
          <ZapIcon className="text-main mr-2" />
          <span>
            Là chủ đầu tư của <span className="font-bold">1</span> TBMT trong đó tự mời thầu{' '}
            <span className="font-bold">0</span> TBMT, có <span className="font-bold">1</span> TBMT
            là do đơn vị khác mời thầu.
          </span>
        </div>
      </div>
    )
  }

  const ContractorRole = () => {
    return (
      <div className="px-4 text-sm">
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã tham gia <span className="font-bold">0</span> gói thầu, trong đó trúng{' '}
            <span className="font-bold">0</span>
            gói, trượt <span className="font-bold">0</span> gói,{' '}
            <span className="font-bold">0</span> chưa có kết quả,{' '}
            <span className="font-bold">0</span> gói đã bị huỷ.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tổng giá trị trúng thầu:<span className="font-bold">0</span> VND (Trong{' '}
            <span className="font-bold">0</span> VND là các gói chỉ định thầu;
            <span className="font-bold">0</span> VND là các gói thầu có KQLCNT nhưng không có TBMT)
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tổng giá trị trúng thầu với vai trò độc lập:
            <span className="font-bold">0</span> VND (Trong đó 
            <span className="font-bold">0</span> VND là các gói chỉ định thầu;
            <span className="font-bold">0</span> VND là các gói thầu có KQLCNT nhưng không có TBMT)
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tổng giá trị các gói thầu đã tham gia và trúng thầu với vai trò liên danh:
            <span className="font-bold">0</span> VND (Trong <span className="font-bold">0</span> VND
            là các gói chỉ định thầu;  <span className="font-bold">0</span> VND là các gói thầu có
            KQLCNT nhưng không có TBMT)
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tỷ lệ chào giá thấp nhất khi tham gia: <span className="font-bold">0%</span> (Chỉ tính
            dựa trên các gói có công bố giá dự toán hoặc giá gói thầu)
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Tỷ lệ trung bình giá trúng thầu so với giá dự toán:{' '}
            <span className="font-bold">99.7%</span> (Chỉ tính dựa trên các gói có công bố giá dự
            toán hoặc giá gói thầu)
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Các tỉnh thành đã tham gia thầu: <span className="font-bold">Không xác định (1)</span>
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Có quan hệ với <span className="font-bold">1</span> bên mời thầu
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã từng đấu với <span className="font-bold">0</span> nhà thầu trong{' '}
            <span className="font-bold">0</span> gói thầu, thắng{' '}
            <span className="font-bold">0</span> gói, thua <span className="font-bold">0</span> gói,{' '}
            <span className="font-bold">0</span> chưa có kết quả,{' '}
            <span className="font-bold">0</span> gói đã bị huỷ.
          </span>
        </div>
        <div className="mb-4">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã từng liên danh với <span className="font-bold">0</span> nhà thầu trong{' '}
            <span className="font-bold">0</span> gói thầu, thắng thầu{' '}
            <span className="font-bold">0</span> gói, thua <span className="font-bold">0</span> gói,{' '}
            <span className="font-bold">0</span> chưa có kết quả,{' '}
            <span className="font-bold">0</span> gói đã bị huỷ.
          </span>
        </div>
        <div className="">
          <ZapIcon className="text-main mr-2" />
          <span>
            Đã nhận <span className="font-bold">0</span> quyết định xử phạt do vi phạm quy định về
            đấu thầu.
          </span>
        </div>
      </div>
    )
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Vai trò mời thầu',
      children: <BiddingRole />,
    },
    {
      key: '2',
      label: 'Vai trò nhà đầu tư',
      children: <InvestorRole />,
    },
    {
      key: '3',
      label: 'Vai trò nhà thầu',
      children: <ContractorRole />,
    },
  ]
  return (
    <div className="px-4 text-sm">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}
