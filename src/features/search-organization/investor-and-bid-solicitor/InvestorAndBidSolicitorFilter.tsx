'use client'

import { Space, Button, RadioChangeEvent, Input } from 'antd'
import { useState } from 'react'

export const InvestorAndBidSolicitorFilter = () => {
  const [value, setValue] = useState(1)
  const [openSearchAdvance, setOpenSearchAdvance] = useState(false)
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
  }

  return (
    <div className="lg:col-span-3">
      <div className="rounded-md border border-border px-8 py-4">
        <p className="mb-4 text-2xl font-semibold text-primary">Tìm kiếm thông tin</p>
        <div className="mb-4 flex gap-x-8">
          <div className="w-full">
            <Space.Compact style={{ width: '100%' }} className="mr-4">
              <Input placeholder="Nhập từ khóa tìm kiếm..." size="large" />

              {/* {!openSearchAdvance && ( */}
              <Button type="primary" className=" text-white hover:!text-white" size="large">
                Tìm kiếm
              </Button>
              {/* )} */}
            </Space.Compact>
          </div>

          {/* <Button
            size="large"
            className="!flex items-center"
            onClick={() => setOpenSearchAdvance(!openSearchAdvance)}
          >
            {openSearchAdvance ? <UpOutlined /> : <DownOutlined />}
            <span>{openSearchAdvance ? 'Sử dụng bộ lọc cơ bản' : 'Sử dụng bộ lọc nâng cao'}</span>
          </Button> */}
        </div>
      </div>
    </div>
  )
}
