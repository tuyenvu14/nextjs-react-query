import { ZapIcon } from '@/src/components/icons'

interface IContractorAnalysisResultProps {
  data: any
}

export const ContractorAnalysisResult = (props: IContractorAnalysisResultProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Đã tham gia <span className="font-bold">&nbsp;1&nbsp;</span>gói thầu, trong đó trúng
          <span className="font-bold">&nbsp;1&nbsp;</span>gói, trượt{' '}
          <span className="font-bold">&nbsp;0&nbsp;</span>gói,
          <span className="font-bold">&nbsp;0&nbsp;</span>
          chưa có kết quả, <span className="font-bold">&nbsp;0&nbsp;</span>gói đã bị huỷ.
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Tổng giá trị trúng thầu:<span className="font-bold">&nbsp;0&nbsp;</span>VND (Trong
          <span className="font-bold">&nbsp;0&nbsp;</span>VND là các gói chỉ định thầu;
          <span className="font-bold">&nbsp;0&nbsp;</span>VND là các gói thầu có KQLCNT nhưng không
          có TBMT)
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Tổng giá trị trúng thầu với vai trò độc lập:
          <span className="font-bold">&nbsp;0&nbsp;</span>VND (Trong đó  VND là các gói chỉ định
          thầu;<span className="font-bold">&nbsp;0&nbsp;</span>VND là các gói thầu có KQLCNT nhưng
          không có TBMT)
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Tổng giá trị các gói thầu đã tham gia và trúng thầu với vai trò liên danh:
          <span className="font-bold">&nbsp;0&nbsp;</span>VND (Trong{' '}
          <span className="font-bold">&nbsp;0&nbsp;</span>VND là các gói chỉ định thầu; {' '}
          <span className="font-bold">&nbsp;0&nbsp;</span>VND là các gói thầu có KQLCNT nhưng không
          có TBMT)
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Tỷ lệ chào giá thấp nhất khi tham gia:<span className="font-bold">&nbsp;60%&nbsp;</span>
          (Chỉ tính dựa trên các gói có công bố giá dự toán hoặc giá gói thầu)
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Tỷ lệ trung bình giá trúng thầu so với giá dự toán:
          <span className="font-bold">&nbsp;87.5%&nbsp;</span>(Chỉ tính dựa trên các gói có công bố
          giá dự toán hoặc giá gói thầu)
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Các tỉnh thành đã tham gia thầu:{' '}
          <span className="font-bold">Không xác định (&nbsp;1&nbsp;)</span>
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Có quan hệ với <span className="font-bold">&nbsp;1&nbsp;</span>bên mời thầu
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Đã từng đấu với <span className="font-bold">&nbsp;0&nbsp;</span>nhà thầu trong
          <span className="font-bold">&nbsp;0&nbsp;</span>gói thầu, thắng
          <span className="font-bold">&nbsp;0&nbsp;</span>gói, thua{' '}
          <span className="font-bold">&nbsp;0&nbsp;</span>gói,
          <span className="font-bold">&nbsp;0&nbsp;</span>chưa có kết quả,
          <span className="font-bold">&nbsp;0&nbsp;</span>gói đã bị huỷ.
        </span>
      </div>
      <div className="mb-4">
        <ZapIcon className="text-main mr-2" />
        <span>
          Đã từng liên danh với <span className="font-bold">&nbsp;0&nbsp;</span>nhà thầu trong
          <span className="font-bold">&nbsp;0&nbsp;</span>gói thầu, thắng thầu
          <span className="font-bold">&nbsp;0&nbsp;</span>
          gói, thua <span className="font-bold">&nbsp;0&nbsp;</span>gói,{' '}
          <span className="font-bold">&nbsp;0&nbsp;</span>
          chưa có kết quả, <span className="font-bold">&nbsp;0&nbsp;</span>gói đã bị huỷ.
        </span>
      </div>
      <div className="">
        <ZapIcon className="text-main mr-2" />
        <span>
          Đã nhận <span className="font-bold">&nbsp;0&nbsp;</span>quyết định xử phạt do vi phạm quy
          định về đấu thầu.
        </span>
      </div>
    </div>
  )
}
