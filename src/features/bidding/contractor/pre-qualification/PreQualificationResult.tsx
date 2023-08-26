import { PreQualificationFilter } from './PreQualificationFilter'
import PreQualificationList from './PreQualificationList'

export const PreQualificationResult = () => {
  return (
    <>
      <PreQualificationFilter />
      <PreQualificationList isOpenPreNotificationResult={false} />
    </>
  )
}
