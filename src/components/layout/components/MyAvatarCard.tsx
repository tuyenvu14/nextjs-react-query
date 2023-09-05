import { profile } from '@/src/constants/routes'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, MenuProps, Space } from 'antd'
import Link from 'next/link'

export const MyAvatarCard = () => {
  const items: MenuProps['items'] = [
    {
      label: <Link href={`${profile}/stringId`}>Thông tin tài khoản</Link>,
      key: '1',
    },
    {
      label: <Link href={`${profile}/stringId`}>Ví tiền & giao dịch</Link>,
      key: '2',
    },
    {
      label: <Link href={`${profile}/stringId`}>Dịch vụ đang sử dụng</Link>,
      key: '3',
    },
    {
      label: <Link href={`${profile}/stringId`}>Bộ lọc đã lưu</Link>,
      key: '4',
    },
    {
      label: <Link href={`${profile}/stringId`}>Nạp tiền vào tài khoản</Link>,
      key: '5',
    },
    {
      label: <Link href={`${profile}/stringId`}>Đổi mật khẩu</Link>,
      key: '6',
    },
    {
      label: <Link href={`${profile}/stringId`}>Đăng xuất</Link>,
      key: '7',
    },
  ]
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
        <a onClick={(e) => e.preventDefault()}>
          <Space className="cursor-pointer">
            <Avatar size={40} icon={<UserOutlined />} />
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  )
}
