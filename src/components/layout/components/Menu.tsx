'use client'

import { listNavItems, projectItems } from '@/src/constants/menuItem'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import logo from '@/src/assets/logo.png'
import { usePathname } from 'next/navigation'

export const Menu = () => {
  const pathname = usePathname()
  const [openArticles, setOpenArticles] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <Link href={'/'}>
        Logo
        {/* <img
          src={`https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png`}
          className="h-[80px]"
        /> */}
      </Link>
      <div className="hidden w-full items-center justify-between py-3 lg:flex lg:w-auto">
        <ul className="mb-0 mt-4 flex list-none flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-4 xl:space-x-8">
          {listNavItems.map((e) => {
            // const isActive = pathname === e.path
            if (e.path === 'project') {
              return (
                <li key={e.id} className="">
                  <Dropdown
                    menu={{
                      items: projectItems,
                      onClick: () => setOpenArticles(false),
                    }}
                    placement="bottom"
                    onOpenChange={(e) => setOpenArticles(e)}
                    arrow
                    trigger={['hover']}
                  >
                    <span
                      className={`text-main hover:text-main flex cursor-pointer py-2 pl-3 pr-3 text-base font-semibold ${
                        false ? '!text-main' : 'text-secondary'
                      } ${openArticles ? '!text-main' : 'text-secondary'} `}
                    >
                      {e.name}
                      <span className="ml-2 flex items-center">
                        {openArticles ? <UpOutlined /> : <DownOutlined />}
                      </span>
                    </span>
                  </Dropdown>
                </li>
              )
            }
            return (
              <li key={e.id}>
                <Link
                  href={e.path}
                  className={`block py-2 pl-3 pr-4 text-base font-semibold ${
                    false ? 'text-main' : 'text-secondary'
                  }`}
                >
                  {e.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="ml-4 xl:ml-8"></div>
      </div>
    </div>
  )
}
