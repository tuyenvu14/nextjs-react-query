import { CopyIcon } from '@/src/components/icons'
import { StatisticOrganization } from '@/src/generated/graphql'

interface IOrganizationInfoProps {
  data: StatisticOrganization
}

export const OrganizationInfo = ({ data }: IOrganizationInfoProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã định danh:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            {data?.code}
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên công ty:</p>
        <p className="w-3/4">{data?.name}</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên viết tắt:</p>
        <p className="w-3/4 font-bold">{data?.briefName}</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã số thuế:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            {data?.taxCode}
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Quốc gia cấp MST:</p>
        <p className="w-3/4">{data?.countryCode}</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại hình cơ quan:</p>
        <p className="w-3/4">{data?.businessType?.name}</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Địa chỉ trụ sở:</p>
        <p className="w-3/4">{data?.officeAddress}</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Lĩnh vực kinh doanh:</p>
        <p className="w-3/4">{data?.businessTypeCode}</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại doanh nghiệp:</p>
        <p className="w-3/4">{data?.businessType?.name}</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Ngày thành lập công ty:</p>
        <p className="w-3/4">{data?.taxDate}</p>
      </div>
      {/* <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Vốn điều lệ:</p>
        <p className="w-3/4">Chưa tìm được field</p>
      </div> */}
      {/* <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Ngày phê duyệt trên mạng ĐT quốc gia:</p>
        <p className="w-3/4">Chưa tìm được field</p>
      </div> */}
      {/* <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Trạng thái nộp phí:</p>
        <p className="w-3/4">Chưa tìm được field</p>
      </div> */}
      <div className="flex gap-x-4">
        <p className="w-1/4">Người đại diện pháp luật:</p>
        <p className="w-3/4">{data?.repFullName}</p>
      </div>
    </div>
  )
}
