import {
  StatisticBidNotification,
  StatisticBidSelectionPlan,
  StatisticBidSelectionPlansQuery,
} from '@/src/generated/graphql'
import { CopyIcon, EyeIcon, UserPlusIcon, UsersIcon, ZapIcon } from '../icons'
import Link from 'next/link'
import {
  biddingContractorNotification,
  biddingContractorSelectionPlan,
} from '@/src/constants/routes'

interface IContractorSelectionPlanProps {
  data: StatisticBidSelectionPlan
}

export const ContractorSelectionPlanItem = (props: IContractorSelectionPlanProps) => {
  const { data } = props
  return (
    <div>
      <div className="rounded-md border border-border">
        <div className="p-2 bg-main flex justify-between">
          <div className="">
            <span>
              <span className="rounded-md border px-2 py-1 bg-white text-sm mr-2">
                <CopyIcon className="mr-1 text-main" />
                {data?.id} - <span className="text-main">{data?.version}</span>
              </span>
            </span>
          </div>
          <div className="text-main cursor-pointer">
            <span className="rounded-md border px-2 py-1 bg-white">
              <UserPlusIcon className="mr-1 text-sm" />
              <span className="text-sm">Theo dõi</span>
            </span>
          </div>
        </div>
        <div style={{ borderBottomWidth: 1 }} className="px-8 py-2">
          <p className="text-xl font-normal text-default mb-4">
            <Link href={`${biddingContractorSelectionPlan}/${data?.id}`}>
              {data?.project?.name ?? '-'}
            </Link>
          </p>
          <div className="flex justify-between text-sm font-light">
            <div>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Chủ đầu tư:
                  <span className="ml-1">{data?.investorName ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Tổng dự toán:
                  <span className="ml-1 font-bold">{data?.totalInvestment ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Địa điểm: <span className="ml-1"> {data?.project?.province?.name ?? '-'}</span>
                </span>
              </p>
              <p>
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
                  Phân loại: <span className="ml-1">{data?.typeCode ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Ngày phê duyệt: <span className="ml-1">{data?.decisionDate ?? '-'}</span>
                </span>
              </p>
              <p>
                <ZapIcon className="text-main mr-2" />
                <span>
                  Số gói thầu:
                  <span className="ml-1">{data?.bidPackagesAmount ?? '-'}</span>
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
