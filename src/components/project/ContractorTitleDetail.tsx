import { UserPlusIcon } from '@/src/components/icons'
import { StatisticBidNotificationResult } from '@/src/generated/graphql'
interface IContractorTitleDetailProps {
  name: string | null | undefined
  publishedAt: string | null | undefined
  title: string
  viewCount: number
  followCount: number
  isFollow: boolean
}

export const ContractorTitleDetail = ({
  name,
  title,
  viewCount,
  followCount,
  publishedAt,
  isFollow = true,
}: IContractorTitleDetailProps) => {
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

      <div className="flex justify-between">
        <div className="flex text-sm">
          <p className="mr-4">
            Đã xem: <span className="font-bold">{viewCount}</span>
          </p>
          <p>
            Đã theo dõi: <span className="font-bold">{followCount}</span>
          </p>
        </div>
        <div>
          <p className="text-end text-sm">
            Thời điểm tìm thấy:
            <span className="font-semibold ml-1">{publishedAt}</span>
          </p>
        </div>
      </div>
    </div>
  )
}