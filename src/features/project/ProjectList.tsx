'use client'
import React from 'react'
import { InputMaybe, Project, useProjectsQuery } from '@/src/generated/graphql'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from 'antd'
import { ProjectItem } from '@/src/components/project/ProjectItem'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { ProjectFooter } from '@/src/components/project/ProjectFooter'
import { useUpdateSearch } from '@/src/hooks/useSearchParams'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'

export default function ProjectList() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { handleSearchClick } = useUpdateSearch(pathname, router)

  const { data: projects } = useProjectsQuery({
    where: {},
    skip: 0,
    take: 10,
  })

  return (
    <>
      <div className="lg:col-span-2">
        <p className="mb-2 text-2xl font-semibold text-primary">Dự án</p>
        <p style={{ borderBottomWidth: 1 }} className="text-lg font-normal mb-4">
          Tất cả ({projects?.projects?.totalCount ?? '-'})
        </p>
        {projects?.projects?.nodes?.map((data) => (
          <div className="mb-4" key={data.id}>
            <ProjectItem data={data as Project} />
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
              total: projects?.projects.totalCount,
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
