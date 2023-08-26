import { UserPlusIcon } from '@/src/components/icons'
import { StatisticBidNotificationResult } from '@/src/generated/graphql'
interface ITitleDetailProps {
  name: string | null | undefined
  title: string
  isFollow: boolean
}

export const TitleDetail = ({ name, title, isFollow = true }: ITitleDetailProps) => {
  return (
    <div>
      <div className="flex justify-between text-main mb-2">
        <p className="text-2xl font-semibold">{title}</p>
        {isFollow && (
          <div className="rounded-md border px-2 py-1 bg-main text-white text-sm flex items-center cursor-pointer">
            <UserPlusIcon className="mr-1" />
            <span>Theo dõi</span>
          </div>
        )}
      </div>
      <p className="text-xl font-semibold text-primary mb-2">{name}</p>

      <p className="text-end text-sm">
        Thời điểm đăng tải:<span className="font-semibold ml-1">11:23 27/07/2023</span>
      </p>
    </div>
  )
}
