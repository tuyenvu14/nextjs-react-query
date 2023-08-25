'use client'
import React from 'react'
import { Project, useProjectsQuery } from '@/src/generated/graphql'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ProjectItem } from '@/src/components/project/ProjectItem'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { FooterList } from '@/src/components/project/FooterList'
import { useUpdateSearch } from '@/src/hooks/useSearchParams'
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from '@/src/constants'

export default function ProjectList() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { handleSearchClick } = useUpdateSearch(pathname, router)
  const page = searchParams.get('page') ?? `${DEFAULT_PAGE_INDEX}`
  const pageSize = searchParams.get('pageSize') ?? `${DEFAULT_PAGE_SIZE}`

  const { data: projects } = useProjectsQuery({
    where: {},
    skip: (+page - 1) * +pageSize,
    take: +pageSize,
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
          <FooterList
            onPageChange={(page: number, pageSize: number) =>
              handleSearchClick({
                page,
                pageSize,
              })
            }
            pagination={{
              pageIndex: parseInt(page ?? `${DEFAULT_PAGE_INDEX}`),
              pageSize: parseInt(pageSize ?? `${DEFAULT_PAGE_SIZE}`),
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
