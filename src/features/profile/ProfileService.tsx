import {
  ArrowBlockRightIcon,
  ChevronDownDoubleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TargetIcon,
  WalletIcon,
} from '@/src/components/icons'
import { Button } from 'antd'

export const ProfileService = (props: any) => {
  return (
    <div>
      <div className="rounded-md border border-border">
        <div className=" bg-main">
          <p className="text-center text-white py-2">Dịch vụ đang được sử dụng (2)</p>
        </div>
        <div>
          <div className="p-4">
            <div className="pb-4" style={{ borderBottomWidth: 1 }}>
              <div className="flex mb-2">
                <ShoppingBagIcon className="text-main mr-2 flex items-center" />
                <p className="font-medium">Gói NHANTHONGBAO</p>
              </div>
              <div className="flex">
                <ArrowBlockRightIcon className="mr-2 flex text-gray-400 items-center" />
                <p className="text-sm">
                  Trạng thái: <span className="text-red-500 font-bold">Hết hạn</span>
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <div className="pb-4" style={{ borderBottomWidth: 1 }}>
              <div className="flex mb-2">
                <ShoppingBagIcon className="text-main mr-2 flex items-center" />
                <p className="font-medium">Gói VIP2</p>
              </div>
              <div className="flex">
                <ArrowBlockRightIcon className="mr-2 flex text-gray-400 items-center" />
                <p className="text-sm">
                  Trạng thái: <span className="text-green-500 font-bold">Đang sử dụng</span>
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 pt-0">
            <div className="justify-end text-sm text-red-500 flex items-center cursor-pointer mb-4">
              <ChevronDownDoubleIcon className="mr-1" />
              <span>Mở rộng</span>
            </div>
            <div className="flex justify-between">
              <Button size="large" className="flex items-center">
                <ShoppingCartIcon className="mr-2" />
                <span className="text-sm">Mua thêm gói dịch vụ</span>
              </Button>
              <Button size="large" className="flex items-center">
                <WalletIcon className="mr-2" />
                <span className="text-sm">Ví của tôi</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
