'use client'

import { Button, Collapse, Tabs, TabsProps } from 'antd'
import { ProfilePersonalInfo } from './ProfilePersonalInfo'
import { ProfileBusinessInfo } from './ProfileBusinessInfo'
import { ProfileService } from './ProfileService'
import { ProfileNotification } from './ProfileNotification'
import { BankNoteIcon, ShoppingBagIcon, ViewIcon, ZapIcon } from '@/src/components/icons'
import { ProfileCoverInfo } from './ProfileCoverInfo'
import { IconMap } from 'antd/es/result'

interface IProfileProps {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const Profile = ({ params, searchParams }: IProfileProps) => {
  console.log(params.id)

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'CÁ NHÂN',
      children: <ProfilePersonalInfo data={undefined} />,
    },
    {
      key: '2',
      label: 'DOANH NGHIỆP',
      children: <ProfileBusinessInfo data={undefined} />,
    },
  ]
  return (
    <>
      <div className="lg:col-span-3">
        <ProfileCoverInfo data={undefined} />
      </div>
      <div className="lg:col-span-2">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold">Thông tin</div>
          <div className="text-main">
            <Button size="large">
              <ShoppingBagIcon className="mr-2 text-sm" />
              <span className="text-sm">Gói DV đã mua</span>
            </Button>
          </div>
        </div>
        <Tabs defaultActiveKey="1" items={items} />
        {/* <Collapse
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
        /> */}

        <div className="flex">
          <Button size="large" className=" bg-white hover:bg-main hover:!text-white mr-2 ">
            <span className="text-sm">Lưu thay đổi</span>
          </Button>
          <Button size="large" className="bg-white text-sm">
            <span className="text-sm">Hủy thay đổi</span>
          </Button>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="">
          <ProfileService />
        </div>
        {/* <div>
          <ProfileNotification />
        </div> */}
      </div>
    </>
  )
}
