'use client'

import { Collapse, Divider } from 'antd'

import { useStatisticOrganizationQuery } from '@/src/generated/graphql'
import { ContractorTitleDetail } from '@/src/components/project/ContractorTitleDetail'
import { ContractorInfo } from './detail/ContractorInfo'
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

interface IContractorDetailProps {
  params: { organizationId: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const ContractorDetail = (props: IContractorDetailProps) => {
  const { params, searchParams } = props
  const { organizationId } = params
  const { data } = useStatisticOrganizationQuery({ where: { id: organizationId } })
  // console.log(data)
  return (
    <>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <ContractorTitleDetail
            name={data?.statisticOrganization?.name}
            title={'Thông tin nhà thầu'}
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
              children: <ContractorInfo data={undefined} />,
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
              children: <ContractorContact data={undefined} />,
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
              children: <ContractorIndustry data={undefined} />,
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
