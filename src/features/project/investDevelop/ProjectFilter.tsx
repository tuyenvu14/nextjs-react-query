'use client'

import { DownOutlined } from '@ant-design/icons'
import { Radio, Space, Button, Select, DatePicker, RadioChangeEvent, Input } from 'antd'
import { useState } from 'react'

export const ProjectFilter = () => {
  const [value, setValue] = useState(1)
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <div className="lg:col-span-3">
      <div className="rounded-md border border-[#E5E5E5] p-4">
        <p className="mb-4 text-2xl font-semibold text-[#1F2937]">Tìm kiếm thông tin</p>
        <Radio.Group onChange={onChange} value={value} className="mb-4 text-base">
          <Radio className="text-base" value={1}>
            Dành cho nhà thầu
          </Radio>
          <Radio className="text-base" value={2}>
            Dành cho nhà đầu tư
          </Radio>
        </Radio.Group>
        <div className="mb-4 flex">
          <Space.Compact style={{ width: '100%' }} className="mr-4">
            <Input placeholder="Nhập từ khóa tìm kiếm..." size="large" />
            <Button className="bg-[#F59E0B] text-white hover:!text-white" size="large">
              Tìm kiếm
            </Button>
          </Space.Compact>
          <Button size="large" className="flex items-center">
            <DownOutlined className="" /> Sử dụng bộ lọc nâng cao
          </Button>
        </div>
        <div className="flex w-9/12 gap-x-8">
          <div className="w-1/3">
            <p className="mb-2">Loại thông tin</p>
            <Select
              defaultValue="1"
              className="w-full"
              // onChange={handleChange}
              size="large"
              options={[
                { value: '1', label: 'Dự án đầu tư phát triển' },
                { value: '2', label: 'Kế hoạch lựa chọn nhà thầu' },
                { value: '3', label: 'Thông báo mời sơ tuyển/quan tâm' },
                { value: '4', label: 'Kết quả sơ tuyển nhà thầu' },
                { value: '5', label: 'Thông báo mời thầu' },
                { value: '6', label: 'Kết quả mở thầu' },
                { value: '7', label: 'Kết quả lựa chọn nhà thầu' },
                { value: '8', label: 'Kết quả mở sơ tuyển' },
              ]}
            />
          </div>
          <div className="w-1/3">
            <p className="mb-2">Thời gian công bố</p>
            <Select
              defaultValue="1"
              className="w-full"
              size="large"
              options={[
                { value: '1', label: 'Hôm nay' },
                { value: '2', label: '7 ngày gần đây' },
                { value: '3', label: '14 ngày gần đây' },
                { value: '4', label: '30 ngày gần đây' },
                { value: '5', label: '3 tháng gần đây' },
                { value: '6', label: '6 tháng gần đây' },
                { value: '7', label: '1 năm gần đây' },
                { value: '8', label: 'Toàn bộ lịch sử' },
                { value: '9', label: 'Khác' },
              ]}
            />
          </div>
          <div className="flex w-1/3 items-end">
            <DatePicker.RangePicker size="large" />
          </div>
        </div>
      </div>
    </div>
  )
}
