interface IContractorSelectionResultPriceProps {
  data: any
}

export const ContractorSelectionResultPrice = (props: IContractorSelectionResultPriceProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Giá gói thầu:</p>
        <p className="w-3/4 font-bold">2.650.330.000 VND</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Bằng chữ:</p>
        <p className="w-3/4 font-bold">Hai tỷ sáu trăm năm mươi triệu ba trăm ba mươi ba nghìn</p>
      </div>
    </div>
  )
}
