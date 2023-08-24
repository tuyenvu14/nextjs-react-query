import { UserPlusIcon } from '@/src/components/icons'
import { BidNotificationQuery, StatisticBidSelectionPlan } from '@/src/generated/graphql'
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons'
import { Steps } from 'antd'
interface IContractorSelectionPlanTitleProps {
  data: StatisticBidSelectionPlan | undefined
}

export const ContractorSelectionPlanTitle = ({ data }: IContractorSelectionPlanTitleProps) => {
  return (
    <div>
      <div className="flex justify-between text-main mb-2">
        <p className="text-2xl font-semibold">Thông báo mời thầu</p>
        <div className="rounded-md border px-2 py-1 bg-main text-white text-sm flex items-center cursor-pointer">
          <UserPlusIcon className="mr-1" />
          <span>Theo dõi</span>
        </div>
      </div>
      <p className="text-xl font-semibold text-primary mb-2">{data?.project?.name}</p>

      <p className="text-end text-sm">
        Thời điểm đăng tải:<span className="font-semibold ml-1">11:23 27/07/2023</span>
      </p>
    </div>
  )
}
