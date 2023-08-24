import { CopyIcon } from '@/src/components/icons'

interface IContractorSelectionPlanInfoProps {
  data: any
}

export const ContractorSelectionPlanInfo = (props: IContractorSelectionPlanInfoProps) => {
  return (
    <div className="px-8 text-sm">
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
        <p className="w-1/4">Tên kế hoạch:</p>
        <p className="w-3/4">
          Quyết định về việc phê duyệt Nhiệm vụ kỹ thuật, dự toán chi phí và kế hoạch lựa chọn nhà
          thầu giai đoạn chuẩn bị dự án
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số gói thầu</p>
        <p className="w-3/4 font-bold">2 gói</p>
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
        <p className="w-1/4">Tên dự án:</p>
        <p className="w-3/4">Chi đầu tư phát triển</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số hiệu dự án:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            PR28372298 - <span className="text-main">01</span>
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Phân loại:</p>
        <p className="w-3/4">Chi đầu tư phát triển</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mục tiêu đầu tư:</p>
        <p className="w-3/4">Chi đầu tư phát triển</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Có sử dụng vốn ODA:</p>
        <p className="w-3/4">Không</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Nguồn vốn đầu tư:</p>
        <p className="w-3/4">Không sử dụng vốn ODA</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Nhóm dự án:</p>
        <p className="w-3/4">Nhóm C</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời gian thực hiện dự án:</p>
        <p className="w-3/4">3 năm</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Địa điểm thực hiện:</p>
        <p className="w-3/4">Hà Nội</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Công bố:</p>
        <p className="w-3/4">15:00 28/08/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại thông báo: </p>
        <p className="w-3/4">3 năm</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Phạm vi điều chỉnh:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Nguồn:</p>
        <p className="text-main cursor-pointer w-3/4">muasamcong.mpi.gov.vn</p>
      </div>
    </div>
  )
}
