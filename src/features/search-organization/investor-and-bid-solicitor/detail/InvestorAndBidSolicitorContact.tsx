interface IInvestorAndBidSolicitorContactProps {
  // data: any
}

export const InvestorAndBidSolicitorContact = (props: IInvestorAndBidSolicitorContactProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số điện thoại:</p>
        <p className="w-3/4">0918438566</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Số fax:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Trang web:</p>
        <p className="w-3/4">vietseri.vn</p>
      </div>
    </div>
  )
}
