import { CopyIcon } from '@/src/components/icons'

interface IContractorSelectionResultInfoProps {
  data: any
}

export const ContractorSelectionResultInfo = (props: IContractorSelectionResultInfoProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã KHLCNT:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            PR28372298 - <span className="text-main">01</span>
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời điểm đăng tải:</p>
        <p className="w-3/4">15:00 28/08/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hình thức đấu thầu:</p>
        <p className="w-3/4 font-bold">Chào hàng cạnh tranh</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số hiệu KHLCNT:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            PR28372298 - <span className="text-main">01</span>
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Gói thầu:</p>
        <p className="w-3/4 font-bold">
          Quyết định về việc phê duyệt Nhiệm vụ kỹ thuật, dự toán chi phí và kế hoạch lựa chọn nhà
          thầu giai đoạn chuẩn bị dự án
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Bên mời thầu:</p>
        <p className="w-3/4">
          <span className="text-primary">vn2345848</span> |{' '}
          <span className="text-main">SỞ KẾ HOẠCH VÀ ĐẦU TƯ THỪA THIÊN HUẾ</span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Chủ đầu tư:</p>
        <p className="w-3/4">
          <span className="text-primary">vn2345848</span> |{' '}
          <span className="text-main">SỞ KẾ HOẠCH VÀ ĐẦU TƯ THỪA THIÊN HUẾ</span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hoàn thành:</p>
        <p className="w-3/4">17:03 28/07/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hình thức dự thầu:</p>
        <p className="w-3/4">Qua mạng</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại hợp đồng:</p>
        <p className="w-3/4">Trọn gói</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Trong nước/Quốc tế:</p>
        <p className="w-3/4">Trong nước</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Phương thức LCNT:</p>
        <p className="w-3/4">Một giai đoạn một túi hồ sơ</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Lĩnh vực:</p>
        <p className="w-3/4">Xây dựng</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Kết quả lựa chọn nhà thầu:</p>
        <p className="w-3/4">Có nhà thầu trúng thầu</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Nguồn:</p>
        <p className="text-main cursor-pointer w-3/4">muasamcong.mpi.gov.vn</p>
      </div>
    </div>
  )
}
