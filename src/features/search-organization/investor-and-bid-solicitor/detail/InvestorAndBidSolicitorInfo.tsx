import { CopyIcon } from '@/src/components/icons'

interface IInvestorAndBidSolicitorInfoProps {
  // data: any
}

export const InvestorAndBidSolicitorInfo = (props: IInvestorAndBidSolicitorInfoProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã định danh (theo MSC mới):</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            vn28372298
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên cơ quan (đầy đủ):</p>
        <p className="w-3/4">
          Trung tâm Nghiên cứu Dâu tằm tơ trung ương - Vietnam Sericultural Research
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên viết tắt:</p>
        <p className="w-3/4 font-bold"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên tiếng Anh:</p>
        <p className="w-3/4">Vietnam Sericultural Research Centre</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số ĐKKD:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            vn28372298
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Phân loại trực thuộc:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại hình cơ quan:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tỉnh/TP:</p>
        <p className="w-3/4">Hà Nội</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Địa chỉ:</p>
        <p className="w-3/4">Ngõ 318, đường Ngọc Thụy, quận Long Biên, Hà Nội</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã số thuế:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            vn28372298
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Ngày cấp MST:</p>
        <p className="w-3/4">01/07/2009</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Quốc Gia:</p>
        <p className="w-3/4">Việt Nam</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại hình pháp lý:</p>
        <p className="w-3/4">Loại hình khác</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Cơ quan chủ quản:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã quan hệ ngân sách</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Người đại diện:</p>
        <p className="w-3/4">Lê Hồng Vân (Chức vụ: Giám Đốc)</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời gian phê duyệt:</p>
        <p className="w-3/4">00:00 18/05/2023</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Trạng thái:</p>
        <p className="w-3/4">Đang hoạt động</p>
      </div>
    </div>
  )
}
