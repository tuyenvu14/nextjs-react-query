import { StatisticBidNotification } from '@/src/generated/graphql'
import { CopyIcon, EyeIcon, UsersIcon, ZapIcon } from '../icons'
import Link from 'next/link'
import {
  biddingContractorNotification,
  searchOrganizationContractorPath,
} from '@/src/constants/routes'

interface IBiddingNotificationProps {
  data: StatisticBidNotification
}

export const BiddingNotificationItem = (props: IBiddingNotificationProps) => {
  const { data } = props
  return (
    <div>
      <div className="rounded-md border border-border">
        <div className="p-2 bg-main text-sm flex justify-between">
          <div className="">
            <span className="rounded-md border px-2 py-1 bg-white mr-2">
              <CopyIcon className="mr-1 text-main" />
              {data?.id} - <span className="text-main">{data?.version}</span>
            </span>
            <span className="text-white">Còn lại: 10 ngày, 32 giờ</span>
          </div>
          <div className="text-main">
            <span className="rounded-md border px-2 py-1 bg-white">
              <UsersIcon className="mr-1" />
              <span>{data?.bidPackage?.isInternet}</span>
            </span>
          </div>
        </div>
        <div style={{ borderBottomWidth: 1 }} className="px-8 py-2">
          <p className="text-xl font-normal text-default mb-4">
            <Link href={`${biddingContractorNotification}/${data?.id}`}>
              {data?.bidPackage?.name ?? '-'}
            </Link>
          </p>
          <div className="flex justify-between text-sm font-light">
            <div>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Chủ đầu tư:
                  <span className="ml-1">
                    {data?.bidPackage?.bidSelectionPlan?.project?.investor?.name ?? '-'}
                  </span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Giá gói thầu:
                  <span className="ml-1 font-bold">{data?.bidPackage?.bidPrice ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Địa điểm: <span className="ml-1"> {data?.bidPackage?.provinceId ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Ngành nghề kinh doanh:
                  <span className="ml-1 font-bold">
                    {data?.bidPackage?.bidSelectionPlan?.project?.investor?.businessType?.name ??
                      '-'}
                  </span>
                </span>
              </p>
              <p className="">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Tổng số phiên bản: <span className="ml-1 font-bold">{data?.versions ?? '-'}</span>
                </span>
              </p>
            </div>
            <div>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Lĩnh vực: <span className="ml-1">{data?.bidPackage?.bidFieldCode ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Đóng thầu vào: <span className="ml-1">{data?.closeDate ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Hình thức LCNT:
                  <span className="ml-1">{data?.bidPackage?.bidFormCode ?? '-'}</span>
                </span>
              </p>
              <p className="">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Trạng thái: <span className="ml-1 font-bold">{data?.statusCode ?? '-'}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-2">
          <EyeIcon className="mr-2 text-secondary" />
          100
        </div>
      </div>
    </div>
  )
}
