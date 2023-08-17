import { TargetIcon } from '../icons'

export const DataAnalysis = (props: any) => {
  return (
    <div>
      <div className="rounded-md border border-border">
        <div className=" bg-main">
          <p className="text-center text-white py-2">Phân tích số liệu</p>
        </div>
        <div>
          <div className="p-4">
            <p className="mb-2">{`Kế hoạch lựa chọn nhà thầu (${props?.data?.count1})`}</p>
            <div className="flex text-sm pb-4" style={{ borderBottomWidth: 1 }}>
              <div className="mr-2">
                <TargetIcon className="text-main" />
              </div>
              <p>
                135.087 kế hoạch lựa chọn nhà thầu được đăng tải trên toàn quốc trong 07 ngày qua
              </p>
            </div>
          </div>
          <div className="p-4 pt-0">
            <p className="mb-2">{`Thông báo mời thầu (${props?.data?.count1})`}</p>
            <div className="flex text-sm pb-4" style={{ borderBottomWidth: 1 }}>
              <div className="mr-2">
                <TargetIcon className="text-main" />
              </div>
              <p>135.087 thông báo mời thầu được đăng tải trên toàn quốc trong 07 ngày qua</p>
            </div>
          </div>
          <div className="p-4 pt-0">
            <p className="mb-2">{`Kết quả lựa chọn nhà thầu (${props?.data?.count1})`}</p>
            <div className="flex text-sm pb-4" style={{ borderBottomWidth: 1 }}>
              <div className="mr-2">
                <TargetIcon className="text-main" />
              </div>
              <p>
                135.087 kết quả lựa chọn nhà thầu được đăng tải trên toàn quốc trong 07 ngày qua
              </p>
            </div>
          </div>
          <div className="p-4 pt-0">
            <p className="mb-2">{`Nhà thầu (${props?.data?.count1})`}</p>
            <div className="flex text-sm">
              <div className="mr-2">
                <TargetIcon className="text-main" />
              </div>
              <p>135.087 nhà thầu trong 07 ngày qua</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
