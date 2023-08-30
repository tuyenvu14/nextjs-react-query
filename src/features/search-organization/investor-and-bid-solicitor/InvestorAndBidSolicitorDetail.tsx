'use client'

import { Collapse, Divider } from 'antd'

import { useStatisticOrganizationQuery } from '@/src/generated/graphql'
import { ContractorTitleDetail } from '@/src/components/project/ContractorTitleDetail'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { InvestorAndBidSolicitorInfo } from './detail/InvestorAndBidSolicitorInfo'
import { InvestorAndBidSolicitorContact } from './detail/InvestorAndBidSolicitorContact'
import { InvestorAndBidSolicitorAnalysisResult } from './detail/InvestorAndBidSolicitorAnalysisResult'
import { InvestorAndBidSolicitorOperationProcess } from './detail/InvestorAndBidSolicitorOperationProcess'
import { InvestorAndBidSolicitorTimeline } from './detail/InvestorAndBidSolicitorTimeline'
import { InvestorAndBidSolicitorKHLCNTList } from './detail/InvestorAndBidSolicitorKHLCNTList'

interface IInvestorAndBidSolicitorDetailProps {
  params: { code: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const InvestorAndBidSolicitorDetail = (props: IInvestorAndBidSolicitorDetailProps) => {
  const { params, searchParams } = props
  const { code } = params
  const { data } = useStatisticOrganizationQuery({ where: { code } })
  // console.log(data)
  return (
    <>
      <div className="lg:col-span-2">
        <div className="mb-4">
          <ContractorTitleDetail
            name={data?.statisticOrganization?.name}
            title={'Thông tin bên mời thầu'}
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
              children: <InvestorAndBidSolicitorInfo />,
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
              children: <InvestorAndBidSolicitorContact />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'KẾT QUẢ PHÂN TÍCH',
              children: <InvestorAndBidSolicitorAnalysisResult />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'QUÁ TRÌNH HOẠT ĐỘNG',
              children: <InvestorAndBidSolicitorOperationProcess />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'TIMELINE',
              children: <InvestorAndBidSolicitorTimeline />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH KHLCNT ĐÃ ĐƯỢC BÊN MỜI THẦU ĐĂNG TẢI',
              children: <InvestorAndBidSolicitorKHLCNTList procuringEntityCode={code} />,
            },
          ]}
        />

        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH TBMT ĐÃ ĐƯỢC BÊN MỜI THẦU ĐĂNG TẢI',
              children: <InvestorAndBidSolicitorTimeline />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH BÊN MỜI THẦU MÀ CHỦ ĐẦU TƯ CÓ QUAN HỆ',
              children: <InvestorAndBidSolicitorTimeline />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH TBMT MÀ BÊN MỜI THẦU NÀY LÀM CHỦ ĐẦU TƯ',
              children: <InvestorAndBidSolicitorTimeline />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH KHLCNT MÀ BÊN MỜI THẦU NÀY LÀM CHỦ ĐẦU TƯ',
              children: <InvestorAndBidSolicitorTimeline />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH DỰ ÁN MÀ BÊN MỜI THẦU LÀM CHỦ ĐẦU TƯ',
              children: <InvestorAndBidSolicitorTimeline />,
            },
          ]}
        />
        <Collapse
          className="!mb-4"
          defaultActiveKey={['1']}
          items={[
            {
              key: '1',
              label: 'DANH SÁCH KIẾN NGHỊ',
              children: <InvestorAndBidSolicitorTimeline />,
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
