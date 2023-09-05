import { UserOutlined } from '@ant-design/icons'
import { Avatar, Form, Input, Radio } from 'antd'

interface IProfilePersonalInfoProps {
  data: any
}

export const ProfilePersonalInfo = (props: IProfilePersonalInfoProps) => {
  return (
    <div className="px-4 text-sm flex gap-x-4">
      <div className="w-2/3">
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} layout="horizontal" className="grow">
          <Form.Item label={<span className="font-medium ">Tên hiển thị</span>}>
            <Input size="large" className="w-full" />
          </Form.Item>
          <Form.Item label={<span className="font-medium">Họ và tên</span>}>
            <Input size="large" className="w-full" />
          </Form.Item>
          <Form.Item label={<span className="font-medium">Email liên kết</span>}>
            <Input size="large" className="w-full" />
          </Form.Item>
          <Form.Item label={<span className="font-medium text-sm text-labelinput">Ngày sinh</span>}>
            <Input size="large" className="w-full" />
          </Form.Item>
          <Form.Item
            label={<span className="font-medium text-sm text-labelinput">Số điện thoại</span>}
          >
            <Input size="large" className="w-full" />
          </Form.Item>
          <Form.Item label={<span className="font-medium text-sm text-labelinput">Giới tính</span>}>
            <Radio.Group onChange={() => {}} value={1}>
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
              <Radio value={3}>Khác</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
      <div>
        <Avatar shape="square" size={255} icon={<UserOutlined />} />
      </div>
    </div>
  )
}
