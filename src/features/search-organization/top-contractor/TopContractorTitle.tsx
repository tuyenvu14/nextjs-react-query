'use client'
import { useStatisticAnalysisQuery } from '@/src/generated/graphql'
import { Progress } from 'antd'

interface ITopContractorTitleProps {
  //   data: any
}

export const TopContractorTitle = ({}: ITopContractorTitleProps) => {
  const { data } = useStatisticAnalysisQuery()
  return (
    <div className="">
      <p className="font-bold text-xl text-center">
        Thống kê các nhà thầu trên mạng Đấu thầu quốc gia
      </p>
      <p>
        <span className="font-bold mb-2">{data?.statisticAnalysis?.allContractors}</span> Nhà thầu
      </p>
      <Progress
        strokeColor={'#F59E0B'}
        percent={
          data &&
          data?.statisticAnalysis?.attendedContractors &&
          data.statisticAnalysis.attendedContractors > 0
            ? +(
                (data.statisticAnalysis.allContractors ?? 0) /
                data.statisticAnalysis.attendedContractors
              ).toFixed(2)
            : 0
        }
        status="active"
        size={['100%', 20]}
      />
      <div className="flex">
        <div className="mr-4 flex items-center">
          <span className="w-9 h-2 rounded-lg mr-2 bg-main" />
          <div className="">Đã tham gia ít nhất 1 gói thầu</div>
        </div>
        <div className="flex items-center">
          <span
            className="w-9 h-2 rounded-lg mr-2"
            style={{
              background: 'rgba(0, 0, 0, 0.06)',
            }}
          />
          <div className="">Chưa tham gia gói thầu nào</div>
        </div>
      </div>
    </div>
  )
}
