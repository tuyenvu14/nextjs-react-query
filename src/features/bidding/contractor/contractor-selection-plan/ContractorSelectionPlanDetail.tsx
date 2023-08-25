'use client'

import {
  StatisticBidSelectionPlan,
  useStatisticBidSelectionPlanQuery,
} from '@/src/generated/graphql'
import { ContractorSelectionPlanTitle } from './detail/ContractorSelectionPlanTitle'
import { Collapse } from 'antd'
import { ContractorSelectionPlanInfo } from './detail/ContractorSelectionPlanInfo'
import { ContractorSelectionPlanEstimate } from './detail/ContractorSelectionPlanEstimate'
import { ContractorSelectionPlanRelatedInfo } from './detail/ContractorSelectionPlanRelatedInfo'
import { ContractorSelectionPlanApproval } from './detail/ContractorSelectionPlanApproval'
import { StructureTree } from '@/src/components/project/StructureTree'

interface IContractorSelectionPlanDetailProps {
  params: { contractorSelectionPlanId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const ContractorSelectionPlanDetail = (props: IContractorSelectionPlanDetailProps) => {
  const { params, searchParams } = props
  const { contractorSelectionPlanId } = params
  const { data } = useStatisticBidSelectionPlanQuery({ where: { id: contractorSelectionPlanId } })

  return (
    <>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <ContractorSelectionPlanTitle
            data={data?.statisticBidSelectionPlan as StatisticBidSelectionPlan}
          />
        </div>

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN CƠ BẢN',
              children: <ContractorSelectionPlanInfo data={undefined} />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'TỔNG DỰ TOÁN',
              children: <ContractorSelectionPlanEstimate data={undefined} />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'QUYẾT ĐỊNH PHÊ DUYỆT',
              children: <ContractorSelectionPlanApproval data={undefined} />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN LIÊN QUAN',
              children: <ContractorSelectionPlanRelatedInfo data={undefined} />,
            },
          ]}
        />
      </div>
      <div className="lg:col-span-1">
        <StructureTree />
      </div>
    </>
  )
}
