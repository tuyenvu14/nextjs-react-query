import { CopyIcon } from '@/src/components/icons'

interface IBiddingNotificationInfoProps {
  data: any
}

export const BiddingNotificationInfo = (props: IBiddingNotificationInfoProps) => {
  return (
    <div className="px-8 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã TBMT:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            PR28372298 - <span className="text-main">01</span>
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Phiên bản đăng tải:</p>
        <p className="w-3/4">00</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Trạng thái đăng tải:</p>
        <p className="w-3/4">Đã đăng tải</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên dự án:</p>
        <p className="w-3/4">
          Dự án cạo trát, vá tường, sơn lại tường dãy nhà lớp học 2 tầng trường TH&THCS Xuân Tăng -
          thành phố Lào Cai
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mục tiêu đầu tư:</p>
        <p className="w-3/4">
          Cạo trát, vá tường, sơn lại tường dãy nhà lớp học 2 tầng trường TH&THCS Xuân Tăng - thành
          phố Lào Cai
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Quy mô đầu tư:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Chủ đầu tư:</p>
        <p className="font-bold w-3/4">
          <span className="text-primary">PL2345848</span> |{' '}
          <span className="text-main">SỞ KẾ HOẠCH VÀ ĐẦU TƯ THỪA THIÊN HUẾ</span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Người có thẩm quyền:</p>
        <p className="w-3/4">Nguyễn Hoàng Thiện</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời gian thực hiện dự án:</p>
        <p className="w-3/4">60 ngày</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Nhóm dự án:</p>
        <p className="w-3/4">Nhóm C</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hình thức quản lý dự án:</p>
        <p className="w-3/4">Chủ đầu tư trực tiếp quản lý dự án</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Sử dụng vốn ODA:</p>
        <p className="w-3/4">Không</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Địa điểm thực hiện:</p>
        <p className="w-3/4">Thị xã Đông Triều, Tỉnh Quảng Ninh</p>
      </div>

      <div className="flex gap-x-4">
        <p className="w-1/4">Nguồn:</p>
        <p className="text-main cursor-pointer w-3/4">muasamcong.mpi.gov.vn</p>
      </div>
    </div>
  )
}
