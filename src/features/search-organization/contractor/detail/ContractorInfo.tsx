import { CopyIcon } from '@/src/components/icons'

interface IContractorInfoProps {
  data: any
}

export const ContractorInfo = (props: IContractorInfoProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã định danh:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            vn28372298
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên công ty:</p>
        <p className="w-3/4">
          Trung tâm Nghiên cứu Dâu tằm tơ trung ương - Vietnam Sericultural Research
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Tên viết tắt:</p>
        <p className="w-3/4 font-bold"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Mã số thuế:</p>
        <p className="w-3/4">
          <span className="rounded-md border px-2 py-1 mr-2">
            <CopyIcon className="mr-2 text-main" />
            4328372243439
          </span>
        </p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Quốc gia cấp MST:</p>
        <p className="w-3/4">Việt Nam</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại hình cơ quan:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Địa chỉ trụ sở:</p>
        <p className="w-3/4">Ngõ 318, đường Ngọc Thụy, quận Long Biên, Hà Nội</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Lĩnh vực kinh doanh:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Loại doanh nghiệp:</p>
        <p className="w-3/4">Công ty trách nhiệm hữu hạn một thành viên</p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Ngày thành lập công ty:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Vốn điều lệ:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Ngày phê duyệt trên mạng ĐT quốc gia:</p>
        <p className="w-3/4"></p>
      </div>
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Trạng thái nộp phí:</p>
        <p className="w-3/4">Đã nộp chi phí</p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Người đại diện pháp luật:</p>
        <p className="w-3/4">Lê Hồng Vân (Chức vụ: Giám Đốc)</p>
      </div>
    </div>
  )
}
