import { CopyIcon } from '@/src/components/icons'

interface IPreQualificationNotificationFileProps {
  data: any
}

export const PreQualificationNotificationFile = (props: IPreQualificationNotificationFileProps) => {
  return (
    <div className="px-4 text-sm">
      <div className="flex mb-4 gap-x-4">
        <p className="w-1/4">Hồ sơ mời sơ tuyển:</p>
        <p className="text-main cursor-pointer w-3/4">
          QĐ phê duyệt điều chỉnh mức đầu tư công trình_0001.pdf
        </p>
      </div>
      <div className="flex gap-x-4">
        <p className="w-1/4">Tệp đính kèm khác:</p>
        <p className="text-main cursor-pointer w-3/4">
          QĐ phê duyệt điều chỉnh mức đầu tư công trình_0001.pdf
        </p>
      </div>
    </div>
  )
}
