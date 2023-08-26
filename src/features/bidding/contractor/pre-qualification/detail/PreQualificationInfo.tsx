import { CopyIcon } from '@/src/components/icons'

interface IPreQualificationInfoProps {
  data: any
}

export const PreQualificationInfo = (props: IPreQualificationInfoProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số TBMST:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            PR28372298 - <span className="text-main">01</span>
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại dự án:</p>
        <p className="w-3/4">Dự án xã hội hóa, chuyên ngành</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Công bố:</p>
        <p className="w-3/4 font-bold">15:00 28/08/2023</p>
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
        <p className="w-1/4">Phương thức:</p>
        <p className="w-3/4">Một giai đoạn hai túi hồ sơ</p>
      </div>
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
        <p className="w-1/4">Hình thức:</p>
        <p className="w-3/4">Qua mạng</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên KHLCNT:</p>
        <p className="w-3/4">
          Dự án cạo trát, vá tường, sơn lại tường dãy nhà lớp học 2 tầng trường TH&THCS Xuân Tăng -
          thành phố Lào Cai
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời gian thực hiện hợp đồng:</p>
        <p className="w-3/4">60 ngày</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hình thức LCNT:</p>
        <p className="w-3/4">Đấu thầu rộng rãi</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Phân loại:</p>
        <p className="w-3/4">Chi thường xuyên</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mở thầu vào: </p>
        <p className="w-3/4">09:00 17/03/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời điểm đóng thầu:</p>
        <p className="w-3/4">09:00 17/03/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hoàn thành vào:</p>
        <p className="w-3/4">09:03 14/04/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hình thức HĐ:</p>
        <p className="w-3/4">Trọn gói</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Số nhà thầu: </p>
        <p className="w-3/4">2</p>
      </div>
    </div>
  )
}
