'use client'

import { useBidOpenPreNotificationResultQuery } from '@/src/generated/graphql'
import { StructureTree } from '@/src/components/project/StructureTree'
import { TitleDetail } from '@/src/components/project/TitleDetail'
import { Collapse } from 'antd'
import { PreQualificationInfo } from './detail/PreQualificationInfo'
import { PackagePrice } from '@/src/components/project/PackagePrice'
import { ApprovalDecision } from '@/src/components/project/ApprovalDecision'
import { PreQualificationContractors } from './detail/PreQualificationContractors'

interface IPreQualificationDetailComponentProps {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
  isOpenPreNotificationResult: boolean
}

export const PreQualificationDetailComponent = (props: IPreQualificationDetailComponentProps) => {
  const { params, isOpenPreNotificationResult } = props
  const { id } = params
  const { data } = useBidOpenPreNotificationResultQuery({
    where: { id },
  })

  return (
    <>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <TitleDetail
            name={data?.bidOpenPreNotificationResult?.bidNotification?.bidPackage?.name}
            title={`${
              isOpenPreNotificationResult
                ? 'Kết quả mở sơ tuyển / mời quan tâm'
                : 'Kết quả sơ tuyển'
            }`}
            isFollow={false}
          />
        </div>
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN CƠ BẢN',
              children: <PreQualificationInfo data={undefined} />,
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
              children: <PackagePrice data={undefined} />,
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
              children: <ApprovalDecision data={undefined} />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: `${isOpenPreNotificationResult ? 'NHÀ THẦU THAM DỰ' : 'NHÀ THẦU TRÚNG TUYỂN'}`,
              children: <PreQualificationContractors data={undefined} />,
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
