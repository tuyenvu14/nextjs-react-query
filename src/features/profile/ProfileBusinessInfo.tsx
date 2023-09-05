import { Divider, Form, Input } from 'antd'

interface IProfileBusinessInfoProps {
  data: any
}

export const ProfileBusinessInfo = (props: IProfileBusinessInfoProps) => {
  return (
    <div className="px-4 text-sm flex gap-x-4">
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} layout="horizontal" className="grow">
        <Form.Item label={<span className="font-medium ">Tên tổ chức</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item label={<span className="font-medium">Tên Tiếng Anh</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item label={<span className="font-medium">Tỉnh/ Thành phố</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item label={<span className="font-medium text-sm text-labelinput">Quận/ Huyện</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item
          label={<span className="font-medium text-sm text-labelinput">Địa chỉ chi tiết</span>}
        >
          <Input size="large" className="w-full" />
        </Form.Item>

        <Form.Item label={<span className="font-medium text-sm text-labelinput">MST</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item label={<span className="font-medium text-sm text-labelinput">Ngày cấp</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item label={<span className="font-medium text-sm text-labelinput">Email</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item
          label={<span className="font-medium text-sm text-labelinput">Số điện thoại</span>}
        >
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item
          label={
            <span className="font-medium text-sm text-labelinput">Nơi tiếp nhập thông tin là</span>
          }
        >
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item label={<span className="font-medium text-sm text-labelinput">Lĩnh vực</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item
          label={<span className="font-medium text-sm text-labelinput">Hình thức kinh doanh</span>}
        >
          <Input size="large" className="w-full" />
        </Form.Item>
        <Divider />
        <p className="font-semibold mb-4">Thông tin người đại diện</p>
        <Form.Item label={<span className="font-medium text-sm text-labelinput">Họ và tên</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item label={<span className="font-medium text-sm text-labelinput">Email</span>}>
          <Input size="large" className="w-full" />
        </Form.Item>
        <Form.Item
          label={<span className="font-medium text-sm text-labelinput">Số điện thoại</span>}
        >
          <Input size="large" className="w-full" />
        </Form.Item>
      </Form>
    </div>
  )
}
