'use client'

import { useBidNotificationQuery } from '@/src/generated/graphql'
import { Collapse } from 'antd'
import { StructureTree } from '@/src/components/project/StructureTree'
import { TitleDetail } from '@/src/components/project/TitleDetail'
import { PreQualificationNotificationInfo } from './detail/PreQualificationNotificationInfo'
import { PackagePrice } from '@/src/components/project/PackagePrice'
import { ApprovalDecision } from '@/src/components/project/ApprovalDecision'
import { PreQualificationNotificationFile } from './detail/PreQualificationNotificationFile'

interface IPreQualificationNotificationDetailProps {
  params: { preQualificationNotificationId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const PreQualificationNotificationDetail = (
  props: IPreQualificationNotificationDetailProps,
) => {
  const { params } = props
  const { preQualificationNotificationId } = params
  const { data } = useBidNotificationQuery({
    where: { id: preQualificationNotificationId },
  })

  return (
    <>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <TitleDetail
            name={data?.bidNotification?.bidPackage?.bidSelectionPlan?.project?.name}
            title="Thông báo mời sơ tuyển / mời quan tâm"
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
              children: <PreQualificationNotificationInfo data={undefined} />,
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
              label: 'HỒ SƠ MỜI SƠ TUYỂN',
              children: <PreQualificationNotificationFile data={undefined} />,
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
