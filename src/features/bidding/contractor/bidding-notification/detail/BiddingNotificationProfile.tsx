interface IBiddingNotificationProfileProps {
  data: any
}

export const BiddingNotificationProfile = (props: IBiddingNotificationProfileProps) => {
  return (
    <div className="px-8 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hình thức:</p>
        <p className="w-3/4">Thư bảo lãnh</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số tiền:</p>
        <p className="w-3/4">2.650.330.000 VND</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Bằng chữ:</p>
        <p className="w-3/4">Hai tỷ sáu trăm năm mươi triệu ba trăm ba mươi ba nghìn</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời hạn đảm bảo:</p>
        <p className="w-3/4 font-semibold">
          120 ngày kể từ thời điểm đóng thầu 14/08/2023 (12/12/2023)
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hồ sơ mời thầu:</p>
        <p className="w-3/4 text-main">HSMT G5.10 (EN-VN).pdf</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tệp đính kèm khác:</p>
        <p className="w-3/4 text-main">HSMT G5.10 (EN-VN).pdf</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">File đính kèm dự toán/KHLCNT điều chỉnh:</p>
        <p className="w-3/4"></p>
      </div>
    </div>
  )
}
