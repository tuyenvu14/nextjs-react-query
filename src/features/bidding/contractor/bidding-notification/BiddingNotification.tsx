import BiddingNotificationList from './BiddingNotificationList'
import { BiddingNotificationFilter } from './BiddingNotificationFilter'

export const BiddingNotification = () => {
  return (
    <>
      <BiddingNotificationFilter />
      <BiddingNotificationList />
    </>
  )
}
