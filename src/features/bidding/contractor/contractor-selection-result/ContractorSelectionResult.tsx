import { ContractorSelectionPlanFilter } from '../contractor-selection-plan/ContractorSelectionPlanFilter'
import ContractorSelectionPlanList from './ContractorSelectionResultList'

export const ContractorSelectionResult = () => {
  return (
    <>
      <ContractorSelectionPlanFilter />
      <ContractorSelectionPlanList />
    </>
  )
}
