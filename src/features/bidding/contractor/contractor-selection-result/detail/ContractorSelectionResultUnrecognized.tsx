interface IContractorSelectionResultUnrecognizedProps {
  data: any
}

export const ContractorSelectionResultUnrecognized = (
  props: IContractorSelectionResultUnrecognizedProps,
) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Quyết định xử lý:</p>
        <p className="w-3/4">Đấu thầu lại</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Lý do: </p>
        <p className="w-3/4">Xác định lại giá dự toán, giá kế hoạch</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số quyết định:</p>
        <p className="w-3/4">804/QĐ-BVĐKT</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Ngày quyết định:</p>
        <p className="w-3/4">14/08/2023</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Văn bản quyết định đính kèm:</p>
        <p className="w-3/4 text-main">12. QĐ phê duyệt huỷ thầu- gói 19 7 8 2023.pdf</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Thời điểm không công nhận KQLCNT:</p>
        <p className="w-3/4">14/08/2023 15:20</p>
      </div>
    </div>
  )
}
