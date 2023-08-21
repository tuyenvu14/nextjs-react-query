'use client'
import React from 'react'
import {
  InputMaybe,
  Project,
  StatisticBidNotification,
  useProjectsQuery,
  useStatisticBidNotificationsQuery,
} from '@/src/generated/graphql'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from 'antd'
import { ProjectItem } from '@/src/components/project/ProjectItem'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { ProjectFooter } from '@/src/components/project/ProjectFooter'
import { useUpdateSearch } from '@/src/hooks/useSearchParams'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'
import { BiddingNotificationItem } from '@/src/components/project/BiddingNotificationItem'

export default function BiddingNotificationList() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { handleSearchClick } = useUpdateSearch(pathname, router)

  const { data: statisticBidNotifications } = useStatisticBidNotificationsQuery({
    where: {
      isLatest: {
        equals: true,
      },
      isPreNotification: {
        equals: false,
      },
    },
    skip: DEFAULT_PAGE_INDEX,
    take: DEFAULT_PAGE_SIZE,
  })

  return (
    <>
      <div className="lg:col-span-2">
        <p className="mb-2 text-2xl font-semibold text-[#1F2937]">Thông báo mời thầu</p>
        <p style={{ borderBottomWidth: 1 }} className="text-lg font-normal mb-4">
          Kết quả ({statisticBidNotifications?.statisticBidNotifications?.totalCount ?? '-'})
        </p>
        {statisticBidNotifications?.statisticBidNotifications?.nodes?.map((data) => (
          <div className="mb-4" key={data.id}>
            <BiddingNotificationItem data={data as StatisticBidNotification} />
          </div>
        ))}
        <div>
          <ProjectFooter
            onPageChange={(page: number, pageSize: number) =>
              handleSearchClick({
                pageIndex: page,
                pageSize: pageSize,
              })
            }
            pagination={{
              pageIndex: 1,
              pageSize: 10,
              // pageIndex,
              // pageSize: initPageSize,
              total: statisticBidNotifications?.statisticBidNotifications?.totalCount,
            }}
          />
        </div>
      </div>
      <div className="lg:col-span-1">
        <DataAnalysis
          data={{
            count1: '276.268.005',
            count2: '276.268.005',
            count3: '276.268.005',
            count4: '276.268.005',
          }}
        />
      </div>
    </>
  )
}
