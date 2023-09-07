import { ZapIcon, BankNoteIcon, ViewIcon } from '@/src/components/icons'

interface IProfileCoverInfoProps {
  data: any
}
export const ProfileCoverInfo = (props: IProfileCoverInfoProps) => {
  return (
    <div className="bg-yellow-700 px-16 py-4 text-white rounded-lg">
      <div className="flex mb-5">
        <div className="bg-white rounded-md border border-border text-main text-sm px-2 mr-2">
          <ZapIcon className=" text-[10px] mr-1" />
          <span className="text-[10px]">VIP 1</span>
        </div>
        <div className="text-sm flex items-center">VÍ CỦA TÔI</div>
      </div>
      <div className="font-semibold mb-5">
        <p className="mb-2">(Username)</p>
        <span className="text-3xl" style={{ borderBottomWidth: 2 }}>
          FULL NAME OF USER
        </span>
      </div>
      <div className="text-2xl flex justify-between">
        <div>
          <p>Số dư:</p>
          <div>
            <BankNoteIcon className="mr-1" />
            <span>18.050.000 VND</span>
          </div>
        </div>
        <div className="flex items-center cursor-pointer">
          <div className="bg-white rounded-md border border-border  text-main text-base px-2 py-1">
            <ViewIcon className="mr-1" />
            <span className="">Nạp tiền</span>
          </div>
        </div>
      </div>
    </div>
  )
}
