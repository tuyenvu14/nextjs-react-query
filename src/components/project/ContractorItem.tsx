import { StatisticOrganization } from '@/src/generated/graphql'
import { CopyIcon, EyeIcon, LocationIcon, UserPlusIcon, ZapIcon } from '../icons'
import Link from 'next/link'
import {
  biddingContractorNotification,
  organization,
  searchOrganizationContractorPath,
} from '@/src/constants/routes'

interface IContractorItemProps {
  data: StatisticOrganization
}

export const ContractorItem = (props: IContractorItemProps) => {
  const { data } = props
  return (
    <div>
      <div className="rounded-md border border-border">
        <div className="p-2 bg-main flex justify-between">
          <div className="">
            <span>
              <span className="rounded-md border px-2 py-1 bg-white text-sm mr-2">
                <CopyIcon className="mr-1 text-main" />
                {data?.code}
              </span>
            </span>
          </div>
          <div className="text-main">
            <span className="rounded-md border px-2 py-1 bg-white mr-2">
              <LocationIcon className="mr-1 text-sm" />
              <span className="text-sm">Hà Nội</span>
            </span>
            <span className="rounded-md border px-2 py-1 bg-white">
              <UserPlusIcon className="mr-1 text-sm" />
              <span className="text-sm">Theo dõi</span>
            </span>
          </div>
        </div>
        <div style={{ borderBottomWidth: 1 }} className="px-8 py-2">
          <p className="text-xl font-normal text-default mb-4">
            <Link href={`${organization}/${data?.id}`}>{data?.name ?? '-'}</Link>
          </p>
          <div className="flex justify-between text-sm font-light">
            <div>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Số gói thầu chờ kết quả:
                  <span className="ml-1 font-bold">{data?.waitingResultBidPackages ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Gói trúng thầu:
                  <span className="ml-1 font-bold">{data?.winBidPackages ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Gói trượt thầu:
                  <span className="ml-1 font-bold"> {data?.loseBidPackages ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Nhà thầu liên quan
                  <span className="ml-1 font-bold">{data?.relatedContractors ?? '-'}</span>
                </span>
              </p>
            </div>
            <div>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Số gói thầu tham gia:
                  <span className="ml-1 font-bold">{data?.attendedBidPackages ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Địa chỉ:
                  <span className="ml-1 font-bold">{data?.officeAddress ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Mã số thuế:
                  <span className="ml-1 font-bold">{data?.repIdNo ?? '-'}</span>
                </span>
              </p>
              <p className="">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Ngành nghề chính:
                  <span className="ml-1 font-bold">{data?.businessType?.name ?? '-'}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
