import InvestorAndBidSolicitorList from './InvestorAndBidSolicitorList'
import { InvestorAndBidSolicitorFilter } from './InvestorAndBidSolicitorFilter'

export const InvestorAndBidSolicitor = () => {
  return (
    <>
      <InvestorAndBidSolicitorFilter />
      <InvestorAndBidSolicitorList />
    </>
  )
}
