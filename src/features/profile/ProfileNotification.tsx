import { TargetIcon } from '@/src/components/icons'

export const ProfileNotification = (props: any) => {
  return (
    <div>
      <div className="rounded-md border border-border">
        <div className=" bg-main">
          <p className="text-center text-white py-2">Thông báo từ các nội dung đã theo dõi</p>
        </div>
        <div>
          <div className="p-4">
            <p className="mb-2">{`Kết quả lựa chọn nhà thầu (${props?.data?.count1})`}</p>
            <div className="text-sm pb-4" style={{ borderBottomWidth: 1 }}>
              <div className="flex mb-4">
                <div className="mr-2">
                  <TargetIcon className="text-main" />
                </div>
                <p>
                  2 thông báo mời sơ tuyển đã đăng tải từ các KHLCNT đã theo dõi trong 07 ngày qua
                </p>
              </div>
              <div className="flex mb-4">
                <div className="mr-2">
                  <TargetIcon className="text-main" />
                </div>
                <p>2 kết quả mở sơ tuyển đã đăng tải từ các KHLCNT đã theo dõi trong 07 ngày qua</p>
              </div>
              <div className="flex mb-4">
                <div className="mr-2">
                  <TargetIcon className="text-main" />
                </div>
                <p>2 kết quả mở sơ tuyển đã đăng tải từ các KHLCNT đã theo dõi trong 07 ngày qua</p>
              </div>
              <div className="flex mb-4">
                <div className="mr-2">
                  <TargetIcon className="text-main" />
                </div>
                <p>2 kết quả mở thầu đã đăng tải từ các KHLCNT đã theo dõi trong 07 ngày qua</p>
              </div>
              <div className="flex mb-4">
                <div className="mr-2">
                  <TargetIcon className="text-main" />
                </div>
                <p>
                  2 thông báo mời sơ tuyển đã đăng tải từ các KHLCNT đã theo dõi trong 07 ngày qua
                </p>
              </div>
              <div className="flex">
                <div className="mr-2">
                  <TargetIcon className="text-main" />
                </div>
                <p>
                  2 kết quả lựa chọn nhà thầu đã đăng tải từ các KHLCNT đã theo dõi trong 07 ngày
                  qua
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <p className="mb-2">{`Nhà thầu tôi theo dõi (${props?.data?.count1})`}</p>
            <div className="flex text-sm pb-4" style={{ borderBottomWidth: 1 }}>
              <div className="mr-2">
                <TargetIcon className="text-main" />
              </div>
              <p>1 nhà thầu đã trúng thầu trong 07 ngày qua</p>
            </div>
          </div>
          <div className="p-4 pt-0">
            <p className="mb-2">{`Bên mời thầu - đầu tư tôi theo dõi (${props?.data?.count1})`}</p>
            <div className="flex text-sm">
              <div className="mr-2">
                <TargetIcon className="text-main" />
              </div>
              <p>3 kế hoạch LCNT mới đã được đăng tải trong 07 ngày qua</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
