'use client'

import { Collapse, Divider } from 'antd'

import { StatisticOrganization, useStatisticOrganizationQuery } from '@/src/generated/graphql'
import { ContractorTitleDetail } from '@/src/components/project/ContractorTitleDetail'
import { OrganizationInfo } from './detail/OrganizationInfo'
import { ContractorContact } from './detail/ContractorContact'
import { ContractorIndustry } from './detail/ContractorIndustry'
import { ContractorAnalysisResult } from './detail/ContractorAnalysisResult'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { ContractorPackageList } from './detail/ContractorPackageList'
import { ContractorHistoryBidding } from './detail/ContractorHistoryBidding'
import { ContractorBidSolicitorList } from './detail/ContractorBidSolicitorList'
import { ContractorWinPackageList } from './detail/ContractorWinPackageList'
import { ContractorFailPackageList } from './detail/ContractorFailPackageList'
import { ContractorsCompetitivelyBidList } from './detail/ContractorsCompetitivelyBidList'

interface IOrganizationDetailProps {
  params: { organizationCode: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const OrganizationDetail = (props: IOrganizationDetailProps) => {
  const { params } = props
  const { organizationCode } = params
  const { data } = useStatisticOrganizationQuery({ where: { code: organizationCode } })
  return (
    <>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <ContractorTitleDetail
            name={data?.statisticOrganization?.name}
            title={'Thông tin tổ chức'}
            publishedAt={'11:23 27/07/2023'}
            viewCount={23}
            followCount={200}
            isFollow={true}
          />
        </div>
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN CƠ BẢN',
              children: (
                <OrganizationInfo data={data?.statisticOrganization as StatisticOrganization} />
              ),
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'THÔNG TIN LIÊN HỆ',
              children: (
                <ContractorContact
                  officePhone={data?.statisticOrganization?.officePhone}
                  officeWeb={data?.statisticOrganization?.officeWeb}
                />
              ),
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'NGÀNH NGHỀ',
              children: <ContractorIndustry organizationCode={organizationCode} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'KẾT QUẢ PHÂN TÍCH NHÀ THẦU',
              children: <ContractorAnalysisResult data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'LỊCH SỬ ĐẤU THẦU CỦA NHÀ THẦU',
              children: <ContractorHistoryBidding data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH GÓI THẦU ĐÃ THAM GIA',
              children: <ContractorPackageList data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH BÊN MỜI THẦU MÀ NHÀ THẦU ĐÃ TỪNG DỰ THẦU',
              children: <ContractorBidSolicitorList data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH GÓI THẦU ĐÃ TRÚNG',
              children: <ContractorWinPackageList data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH GÓI THẦU ĐÃ TRƯỢT',
              children: <ContractorFailPackageList data={undefined} />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH NHÀ THẦU TỪNG ĐẤU',
              children: <ContractorsCompetitivelyBidList data={undefined} />,
            },
          ]}
        />
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
