interface IBiddingNotificationApprovalProps {
  data: any
}

export const BiddingNotificationApproval = (props: IBiddingNotificationApprovalProps) => {
  return (
    <div className="px-8 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số hiệu QĐ phê duyệt KHLCNT:</p>
        <p className="w-3/4">136/QĐ-UBND</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Ngày phê duyêt:</p>
        <p className="w-3/4">25/07/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Cơ quan phê duyệt:</p>
        <p className="w-3/4">UBND phường Hồng Phong</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Quyết định phê duyệt:</p>
        <p className="w-3/4 text-main">QĐ phê duyệt điều chỉnh mức đầu tư công trình_0001.pdf</p>
      </div>
    </div>
  )
}
