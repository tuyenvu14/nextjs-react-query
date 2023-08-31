interface IContractorContactProps {
  officePhone: string | null | undefined
  officeWeb: string | null | undefined
}

export const ContractorContact = ({ officePhone, officeWeb }: IContractorContactProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số điện thoại:</p>
        <p className="w-3/4">{officePhone}</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Trang web:</p>
        <p className="w-3/4">{officeWeb}</p>
      </div>
    </div>
  )
}
