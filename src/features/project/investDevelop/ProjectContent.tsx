'use client'
import React from 'react'
import { useIdeasQuery } from '@/src/generated/graphql'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from 'antd'

export default function ProjectContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams() // const data = await getData()
  console.log(pathname, '-------------pathname')
  console.log(searchParams.get('key'), '-------------searchParams')
  console.log(searchParams.get('status'), '-------------searchParams')
  console.log(searchParams.get('topicIds'), '-------------searchParams')
  const { data: ideas } = useIdeasQuery({
    where: {},
    skip: 0,
    take: 10,
  })

  return (
    <>
      <div className="lg:col-span-2">
        <p className="mb-2 text-2xl font-semibold text-[#1F2937]">Dự án</p>
        <p style={{ borderBottomWidth: 1 }} className="text-lg font-normal">
          Tất cả (126.232)
        </p>
        {/* {data && data.map((user: any, index: any) => <div key={index}>{user.firstName}</div>)} */}
      </div>
      <div className="lg:col-span-1">
        <Button className="bg-[#F59E0B] text-white hover:!text-white" size="large">
          Search
        </Button>
        {ideas &&
          ideas?.ideas?.nodes?.map((user: any, index: any) => <div key={index}>{user.title}</div>)}
      </div>
    </>
  )
}
