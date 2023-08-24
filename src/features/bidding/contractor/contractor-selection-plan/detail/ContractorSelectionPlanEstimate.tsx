interface IContractorSelectionPlanEstimateProps {
  data: any
}

export const ContractorSelectionPlanEstimate = (props: IContractorSelectionPlanEstimateProps) => {
  return (
    <div className="px-8 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tổng dự toán:</p>
        <p className="w-3/4">3.444.185.700 VND</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Số tiền bằng chữ:</p>
        <p className="w-3/4">
          Ba tỷ bốn trăm bốn mươi bốn triệu một trăm tám mươi lăm ngàn bảy trăm đồng
        </p>
      </div>
    </div>
  )
}
