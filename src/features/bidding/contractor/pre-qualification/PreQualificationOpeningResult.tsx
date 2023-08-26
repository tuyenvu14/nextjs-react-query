import { PreQualificationFilter } from './PreQualificationFilter'
import PreQualificationList from './PreQualificationList'

export const PreQualificationOpeningResult = () => {
  return (
    <>
      <PreQualificationFilter />
      <PreQualificationList isOpenPreNotificationResult={true} />
    </>
  )
}
