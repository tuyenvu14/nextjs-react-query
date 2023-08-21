import { CopyIcon } from '@/src/components/icons'

export const BiddingNotificationInfo = () => {
  return (
    <div className="px-8">
      <div className="flex">
        <p>Mã TBMT</p>
        <span className="rounded-md border px-2 py-1 mr-2">
          <CopyIcon className="mr-1 text-main" />
          PR28372298 - <span className="text-main">01</span>
        </span>
      </div>
    </div>
  )
}
