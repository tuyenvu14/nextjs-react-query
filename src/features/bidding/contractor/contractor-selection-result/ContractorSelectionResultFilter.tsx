'use client'

import { BankNoteIcon } from '@/src/components/icons'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import {
  Radio,
  Space,
  Button,
  Select,
  DatePicker,
  RadioChangeEvent,
  Input,
  Switch,
  Divider,
} from 'antd'
import { useState } from 'react'

export const ContractorSelectionResultFilter = () => {
  const [value, setValue] = useState(1)
  const [openSearchAdvance, setOpenSearchAdvance] = useState(false)
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }

  return (
    <div className="lg:col-span-3">
      <div className="rounded-md border border-border px-8 py-4">
        <p className="mb-4 text-2xl font-semibold text-primary">Tìm kiếm thông tin</p>
        <div className="mb-4">
          <Radio.Group onChange={onChange} value={value}>
            <Radio className="!text-base" value={1}>
              Dành cho nhà thầu
            </Radio>
            <Radio className="!text-base" value={2}>
              Dành cho nhà đầu tư
            </Radio>
          </Radio.Group>
        </div>
        <div className="mb-4 flex gap-x-8">
          <div className="w-9/12">
            <Space.Compact style={{ width: '100%' }} className="mr-4">
              <Input placeholder="Nhập từ khóa tìm kiếm..." size="large" />

              {!openSearchAdvance && (
                <Button type="primary" className=" text-white hover:!text-white" size="large">
                  Tìm kiếm
                </Button>
              )}
            </Space.Compact>
          </div>

          <Button
            size="large"
            className="!flex items-center"
            onClick={() => setOpenSearchAdvance(!openSearchAdvance)}
          >
            {openSearchAdvance ? <UpOutlined /> : <DownOutlined />}
            <span>{openSearchAdvance ? 'Sử dụng bộ lọc cơ bản' : 'Sử dụng bộ lọc nâng cao'}</span>
          </Button>
        </div>
        <div className="flex w-9/12 gap-x-8">
          <div className="w-1/3">
            <p className="mb-2">Loại thông tin</p>
            <Select
              defaultValue="1"
              className="w-full"
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

        {openSearchAdvance && (
          <div
          // className={`${
          //   openSearchAdvance ? 'h-[513px]' : 'h-0'
          // } transition-all delay-150 duration-300 overflow-hidden w-full`}
          >
            <div className="mt-4 flex gap-x-8">
              <div className="w-9/12 ">
                <div className="mb-4">
                  <p className="mb-2">Từ khóa bổ sung</p>
                  <Input placeholder="Nhập từ khóa tìm kiếm..." size="large" />
                </div>
                <div className="mb-4">
                  <p className="mb-2">Không chứa từ</p>
                  <Input placeholder="Nhập từ khóa tìm kiếm..." size="large" />
                </div>
                <div className="mb-4">
                  <p className="mb-2">Nhóm dự án</p>
                  <Select
                    defaultValue="1"
                    className="w-full"
                    size="large"
                    options={[{ value: '1', label: 'Tất cả' }]}
                  />
                </div>
                <div className="mb-4">
                  <p className="mb-2">Tổng mức đầu tư (đơn vị: VND)</p>
                  <div className="flex w-1/2 gap-x-8">
                    <Input
                      placeholder="Từ"
                      size="large"
                      prefix={<BankNoteIcon className="mr-1" />}
                    />
                    <Input
                      placeholder="Đến"
                      size="large"
                      prefix={<BankNoteIcon className="mr-1" />}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Sử dụng bộ lọc đã lưu</p>
                  <div>
                    <Space.Compact style={{ width: '100%' }} className="mr-4">
                      <Select
                        defaultValue="1"
                        className="w-full"
                        // onChange={handleChange}
                        size="large"
                        options={[
                          { value: '1', label: 'Bộ lọc 1' },
                          { value: '2', label: 'Bộ lọc 2' },
                          { value: '3', label: 'Bộ lọc 3' },
                        ]}
                      />
                      <Button type="primary" className=" text-white hover:!text-white" size="large">
                        Sử dụng
                      </Button>
                    </Space.Compact>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className="mr-2">
                    <Switch defaultChecked />
                  </span>
                  <span>Tìm kiếm tuyệt đối</span>
                </div>
                <div className="mb-4">
                  <p className="mb-2 font-semibold">Sử dụng nguồn vốn ODA</p>
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      <Radio value={1}>Có</Radio>
                      <Radio value={2}>Không</Radio>
                      <Radio value={3}>Tất cả</Radio>
                    </Space>
                  </Radio.Group>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Dự án có KHLCNT</p>
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      <Radio value={1}>Có</Radio>
                      <Radio value={2}>Không</Radio>
                      <Radio value={3}>Tất cả</Radio>
                    </Space>
                  </Radio.Group>
                </div>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="text-center">
              <Button type="primary" className="text-white hover:!text-white mr-4" size="large">
                Tìm kiếm
              </Button>
              <Button className="mr-4" size="large">
                Thiết lập lại
              </Button>
              <Button type="primary" danger className="text-white hover:!text-white" size="large">
                Tạo bộ lọc
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
