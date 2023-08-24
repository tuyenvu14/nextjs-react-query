interface IBiddingNotificationOpeningProps {
  data: any
}

export const BiddingNotificationOpening = (props: IBiddingNotificationOpeningProps) => {
  return (
    <div className="px-8 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mở thầu vào:</p>
        <p className="w-3/4">15:29 28/07/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mở thầu tại:</p>
        <p className="w-3/4 text-main">https://muasamcong.mpi.gov.vn</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Dự toán gói thầu:</p>
        <p className="w-3/4 font-semibold">2.650.330.000 VND</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Bằng chữ:</p>
        <p className="w-3/4 font-semibold">
          Hai tỷ sáu trăm năm mươi triệu ba trăm ba mươi ba nghìn
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Kết quả mở thầu:</p>
        <p className="w-3/4">Chưa có kết quả</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Kết quả LCNT: </p>
        <p className="w-3/4">Chưa có kết quả</p>
      </div>
    </div>
  )
}
