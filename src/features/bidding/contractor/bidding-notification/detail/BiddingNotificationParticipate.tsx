interface IBiddingNotificationParticipateProps {
  data: any
}

export const BiddingNotificationParticipate = (props: IBiddingNotificationParticipateProps) => {
  return (
    <div className="px-8 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hình thức:</p>
        <p className="w-3/4">Qua mạng</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Thời gian nhận HSDT:</p>
        <p className="w-3/4">15:29 28/07/2023 - 08:05 14/08/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Chi phí nộp E-HSDT:</p>
        <p className="w-3/4">330.000 VND</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Nơi nhận E-HSDT:</p>
        <p className="w-3/4 text-main">https://muasamcong.mpi.gov.vn</p>
      </div>
    </div>
  )
}
