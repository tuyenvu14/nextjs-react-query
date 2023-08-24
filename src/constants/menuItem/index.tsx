import { Dropdown, MenuProps } from 'antd'
import {
  bidding,
  biddingContractor,
  biddingContractorNotification,
  biddingContractorSelectionPlan,
  biddingInvestor,
  docs,
  home,
  intro,
  price,
  project,
  projectInvestDevelopPath,
  projectNewlyAnnouncedPath,
  searchOrganization,
  searchOrganizationContractorPath,
  searchOrganizationInvestorAndBidSolicitorPath,
} from '../routes'
import Link from 'next/link'

export const listNavItems = [
  {
    id: 1,
    name: 'Trang chủ',
    path: home,
  },
  {
    id: 2,
    name: 'Dự án',
    path: project,
  },
  {
    id: 3,
    name: 'Tra cứu tổ chức',
    path: searchOrganization,
  },
  {
    id: 4,
    name: 'Đấu thầu',
    path: bidding,
  },
  {
    id: 5,
    name: 'Bảng giá',
    path: price,
  },
  {
    id: 6,
    name: 'Tài liệu',
    path: docs,
  },
  {
    id: 7,
    name: 'Giới thiệu',
    path: intro,
  },
]

export const projectItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link
        href={projectInvestDevelopPath}
        className="inline-flex items-center text-sm font-medium"
      >
        Dự án đầu tư phát triển
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link
        href={projectNewlyAnnouncedPath}
        className="inline-flex items-center text-sm font-medium"
      >
        Công bố danh mục dự án
      </Link>
    ),
  },
]

export const searchOrganizationItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link
        href={searchOrganizationContractorPath}
        className="inline-flex items-center text-sm font-medium"
      >
        Nhà thầu
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link
        href={searchOrganizationInvestorAndBidSolicitorPath}
        className="inline-flex items-center text-sm font-medium"
      >
        Nhà đầu tư - Bên mời thầu
      </Link>
    ),
  },
]

export const biddingItems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
        Dành cho nhà thầu
      </Link>
    ),
    children: [
      {
        key: '1-1',
        label: (
          <Link
            href={biddingContractorSelectionPlan}
            className="inline-flex items-center text-sm font-medium"
          >
            Kế hoạch LCNT
          </Link>
        ),
      },
      {
        key: '1-2',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            TB mời sơ tuyển
          </Link>
        ),
      },
      {
        key: '1-3',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            Kết quả mở sơ tuyển
          </Link>
        ),
      },
      {
        key: '1-4',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            Kết quả sơ tuyển
          </Link>
        ),
      },
      {
        key: '1-5',
        label: (
          <Link
            href={biddingContractorNotification}
            className="inline-flex items-center text-sm font-medium"
          >
            TB mời thầu
          </Link>
        ),
      },
      {
        key: '1-6',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            Kết quả mở thầu
          </Link>
        ),
      },
      {
        key: '1-7',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            Kết quả LCNT
          </Link>
        ),
      },
    ],
  },
  {
    key: '2',
    label: (
      <Link href={biddingInvestor} className="inline-flex items-center text-sm font-medium">
        Kế hoạch LC nhà đầu tư
      </Link>
    ),
    children: [
      {
        key: '2-1',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            Kế hoạch LC nhà đầu tư
          </Link>
        ),
      },
      {
        key: '2-2',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            TB mời sơ tuyển
          </Link>
        ),
      },
      {
        key: '2-3',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            Kết quả sơ tuyển
          </Link>
        ),
      },
      {
        key: '2-4',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            TB mời thầu đầu tư
          </Link>
        ),
      },
      {
        key: '2-5',
        label: (
          <Link href={biddingContractor} className="inline-flex items-center text-sm font-medium">
            Kết quả LC nhà đầu tư
          </Link>
        ),
      },
    ],
  },
]
