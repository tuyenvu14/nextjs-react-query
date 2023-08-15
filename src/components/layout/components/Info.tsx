import { SearchOutlined, BellOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import Link from 'next/link'
// import { MyAvatarCard } from "../avatar/MyAvatarCard";

export const Info = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href={`/`} className="mr-4">
        <SearchOutlined className="text-secondary text-xl" />
      </Link>
      <Link href={'/'} className="mr-4">
        <Badge size="small" count={null}>
          <BellOutlined className="text-secondary text-xl" />
        </Badge>
      </Link>
      {/* <MyAvatarCard profile={{}} handleLogout={() => {}} /> */}
    </div>
  )
}
