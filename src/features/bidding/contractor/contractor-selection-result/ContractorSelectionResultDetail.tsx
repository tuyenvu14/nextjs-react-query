'use client'

import {
  StatisticBidNotificationResult,
  useStatisticBidNotificationResultQuery,
} from '@/src/generated/graphql'
import { ContractorSelectionResultTitle } from './detail/ContractorSelectionResultTitle'
import { Collapse } from 'antd'
import { ContractorSelectionResultInfo } from './detail/ContractorSelectionResultInfo'
import { ContractorSelectionResultApproval } from './detail/ContractorSelectionResultApproval'
import { ContractorSelectionResultPrice } from './detail/ContractorSelectionResultPrice'
import { ContractorSelectionResultRelatedInfo } from './detail/ContractorSelectionResultRelatedInfo'
import { ContractorSelectionResultMerchandise } from './detail/ContractorSelectionResultMerchandise'
import { ContractorSelectionResultContract } from './detail/ContractorSelectionResultContract'
import { ContractorSelectionResultUnrecognized } from './detail/ContractorSelectionResultUnrecognized'
import { StructureTree } from '@/src/components/project/StructureTree'

interface IContractorSelectionResultDetailProps {
  params: { contractorSelectionResultId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const ContractorSelectionResultDetail = (props: IContractorSelectionResultDetailProps) => {
  const { params } = props
  const { contractorSelectionResultId } = params
  const { data } = useStatisticBidNotificationResultQuery({
    where: { id: contractorSelectionResultId },
  })

  return (
    <>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <ContractorSelectionResultTitle
            data={data?.statisticBidNotificationResult as StatisticBidNotificationResult}
          />
        </div>
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN CƠ BẢN',
              children: <ContractorSelectionResultInfo data={undefined} />,
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
              children: <ContractorSelectionResultApproval data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'GIÁ GÓI',
              children: <ContractorSelectionResultPrice data={undefined} />,
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
              children: <ContractorSelectionResultRelatedInfo data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'BẢNG CHÀO GIÁ HÀNG HÓA',
              children: <ContractorSelectionResultMerchandise data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'KÝ KẾT HỢP ĐỒNG ',
              children: <ContractorSelectionResultContract data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN KHÔNG CÔNG NHẬN KQLCNT      ',
              children: <ContractorSelectionResultUnrecognized data={undefined} />,
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
