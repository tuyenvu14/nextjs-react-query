'use client'

import { Collapse } from 'antd'
import { BiddingNotificationSchedule } from './detail/BiddingNotificationSchedule'
import { BiddingNotificationInfo } from './detail/BiddingNotificationInfo'
import { useBidNotificationQuery } from '@/src/generated/graphql'
import { BiddingNotificationApproval } from './detail/BiddingNotificationApproval'
import { BiddingNotificationParticipate } from './detail/BiddingNotificationParticipate'
import { BiddingNotificationOpening } from './detail/BiddingNotificationOpening'
import { BiddingNotificationGuarantee } from './detail/BiddingNotificationGuarantee'
import { BiddingNotificationProfile } from './detail/BiddingNotificationProfile'

interface IBiddingNotificationDetailProps {
  params: { biddingNotificationId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const BiddingNotificationDetail = (props: IBiddingNotificationDetailProps) => {
  const { params, searchParams } = props
  const { biddingNotificationId } = params
  // console.log(biddingNotificationId, searchParams, '-------1111111111111111')
  const { data } = useBidNotificationQuery({ where: { id: biddingNotificationId } })
  return (
    <div className="lg:col-span-3">
      <div className="mb-4">
        <BiddingNotificationSchedule data={data} />
      </div>

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: 'THÔNG TIN CƠ BẢN',
            children: <BiddingNotificationInfo data={undefined} />,
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
            children: <BiddingNotificationApproval data={undefined} />,
          },
        ]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: 'THAM DỰ THẦU ',
            children: <BiddingNotificationParticipate data={undefined} />,
          },
        ]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[
          { key: '1', label: 'MỞ THẦU', children: <BiddingNotificationOpening data={undefined} /> },
        ]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: 'ĐẢM BẢM DỰ THẦU ',
            children: <BiddingNotificationGuarantee data={undefined} />,
          },
        ]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: 'HỒ SƠ MỜI THẦU',
            children: <BiddingNotificationProfile data={undefined} />,
          },
        ]}
      />

      <Collapse
        defaultActiveKey={['1']}
        items={[{ key: '1', label: 'THÔNG TIN LIÊN QUAN ', children: <p>{'text'}</p> }]}
      />
    </div>
  )
}
