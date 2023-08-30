import Link from 'next/link'
import { TopContractorTitle } from './TopContractorTitle'
import { Button, Divider } from 'antd'
import { ChartIcon } from '@/src/components/icons'
import { searchOrganizationContractorPath } from '@/src/constants/routes'
import { DataAnalysis } from '@/src/components/project/DataAnalysis'
import { TopWinContractor } from './TopWinContractor'
import { TopLoseContractor } from './TopLoseContractor'
import { TopViewContractor } from './TopViewContractor'
import { TopAttendContractor } from './TopAttendContractor'

export const TopContractor = () => {
  return (
    <>
      <div className="lg:col-span-3">
        <TopContractorTitle />
      </div>
      <div className="lg:col-span-2">
        <div style={{ borderBottomWidth: 1 }} className="pb-2 mb-4">
          <Link href={searchOrganizationContractorPath}>
            <Button type="primary" className=" text-white hover:!text-white" size="large">
              <ChartIcon className="mr-2" />
              Xem danh sách nhà thầu
            </Button>
          </Link>
        </div>
        <div>
          <TopWinContractor />
        </div>
        <Divider />
        <div>
          <TopLoseContractor />
        </div>
        <Divider />
        <div>
          <TopViewContractor />
        </div>
        <Divider />
        <div>
          <TopAttendContractor />
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
