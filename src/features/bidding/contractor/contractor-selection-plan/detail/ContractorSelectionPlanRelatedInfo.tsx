import { TabsProps, Tabs } from 'antd'
import { Package } from './relatedInfo/Package'
import { TenderNotice } from './relatedInfo/TenderNotice'
import { NoticePreQualification } from './relatedInfo/NoticePrequalification'

interface IContractorSelectionPlanRelatedInfoProps {
  data: any
}

export const ContractorSelectionPlanRelatedInfo = (
  props: IContractorSelectionPlanRelatedInfoProps,
) => {
  const onChange = (key: string) => {
    console.log(key)
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Gói thầu',
      children: <Package />,
    },
    {
      key: '2',
      label: 'Thông báo mời sơ tuyển',
      children: <NoticePreQualification />,
    },
    {
      key: '3',
      label: 'Thông báo mời thầu',
      children: <TenderNotice />,
    },
  ]
  return (
    <div className="px-8 text-sm">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
