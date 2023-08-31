import OrganizationList from './OrganizationList'
import { OrganizationFilter } from './OrganizationFilter'

export const Organization = () => {
  return (
    <>
      <OrganizationFilter />
      <OrganizationList />
    </>
  )
}
