'use client'

import { Collapse } from 'antd'
import { BiddingNotificationSchedule } from './detail/BiddingNotificationSchedule'
import { BiddingNotificationInfo } from './detail/BiddingNotificationInfo'
import { useBidNotificationQuery } from '@/src/generated/graphql'

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
        items={[{ key: '1', label: 'THÔNG TIN CƠ BẢN', children: <BiddingNotificationInfo /> }]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[{ key: '1', label: 'QUYẾT ĐỊNH PHÊ DUYỆT', children: <p>{'text'}</p> }]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[{ key: '1', label: 'THAM DỰ THẦU ', children: <p>{'text'}</p> }]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[{ key: '1', label: 'MỞ THẦU', children: <p>{'text'}</p> }]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[{ key: '1', label: 'ĐẢM BẢM DỰ THẦU ', children: <p>{'text'}</p> }]}
      />

      <Collapse
        className="!mb-4"
        defaultActiveKey={['1']}
        items={[{ key: '1', label: 'HỒ SƠ MỜI THẦU', children: <p>{'text'}</p> }]}
      />

      <Collapse
        defaultActiveKey={['1']}
        items={[{ key: '1', label: 'THÔNG TIN LIÊN QUAN ', children: <p>{'text'}</p> }]}
      />
    </div>
  )
}
