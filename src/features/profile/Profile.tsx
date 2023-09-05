'use client'

import { Collapse } from 'antd'
import { ProfilePersonalInfo } from './ProfilePersonalInfo'
import { ProfileBusinessInfo } from './ProfileBusinessInfo'
import { ProfileService } from './ProfileService'
import { ProfileNotification } from './ProfileNotification'

interface IProfileProps {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const Profile = ({ params, searchParams }: IProfileProps) => {
  console.log(params.id)
  return (
    <>
      <div className="lg:col-span-2">
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN CÁ NHÂN',
              children: <ProfilePersonalInfo data={undefined} />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN DOANH NGHIỆP',
              children: <ProfileBusinessInfo data={undefined} />,
            },
          ]}
        />
      </div>
      <div className="lg:col-span-1">
        <div className="mb-4">
          <ProfileService />
        </div>
        <div>
          <ProfileNotification />
        </div>
      </div>
    </>
  )
}
