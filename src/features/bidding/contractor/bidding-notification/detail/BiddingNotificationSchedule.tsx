import { UserPlusIcon } from '@/src/components/icons'
import { BidNotificationQuery } from '@/src/generated/graphql'
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import { Steps } from 'antd'
interface IBiddingNotificationScheduleProps {
  data: BidNotificationQuery | undefined
}

export const BiddingNotificationSchedule = ({ data }: IBiddingNotificationScheduleProps) => {
  return (
    <div>
      <div className="flex justify-between text-main mb-2">
        <p className="text-2xl font-semibold">Thông báo mời thầu</p>
        <div className="rounded-md border px-2 py-1 bg-main text-white text-sm flex items-center cursor-pointer">
          <UserPlusIcon className="mr-1" />
          <span>Theo dõi</span>
        </div>
      </div>
      <p className="text-xl font-semibold text-primary mb-2">
        {data?.bidNotification.bidPackage?.name}
      </p>
      <div className="mb-2 w-4/5 m-auto">
        <div className="mb-2">
          <Steps
            labelPlacement="vertical"
            items={[
              {
                title: <span className="text-xs">Dự án</span>,
                status: 'finish',
                icon: <UserOutlined />,
              },
              {
                title: <span className="text-xs">Kế hoạch lựa chọn nhà thầu</span>,
                status: 'finish',
                icon: <SolutionOutlined />,
              },
              {
                title: <span className="text-xs">Thông báo mời sơ tuyển</span>,
                status: 'process',
                icon: <SolutionOutlined />,
              },
              {
                title: <span className="text-xs">Kết quả mở sơ tuyển</span>,
                status: 'wait',
                icon: <SmileOutlined />,
              },
              {
                title: <span className="text-xs">Kết quả sơ tuyển</span>,
                status: 'wait',
                icon: <SmileOutlined />,
              },
              {
                title: 'Thông báo mời thầu',
                status: 'wait',
                icon: <SmileOutlined />,
              },
              {
                title: <span className="text-xs">Kết quả mở thầu</span>,
                status: 'wait',
                icon: <SmileOutlined />,
              },
              {
                title: <span className="text-xs">Kết quả lựa chọn nhà thầu</span>,
                status: 'wait',
                icon: <SmileOutlined />,
              },
            ]}
          />
        </div>
        <div className="rounded-md border border-main py-4 text-center">
          <p className="mb-2 text-sm">Thời điểm đóng thầu</p>
          <p className="mb-2 text-lg">
            <span className="mr-4 text-green-500">11:24</span>04/08/2023
          </p>
          <p className="text-lg text-red-500">Còn 6 ngày, 17 giờ, 16 phút để nộp HSDT</p>
        </div>
      </div>
      <p className="text-end text-sm">
        Thời điểm đăng tải:<span className="font-semibold ml-1">11:23 27/07/2023</span>
      </p>
    </div>
  )
}
