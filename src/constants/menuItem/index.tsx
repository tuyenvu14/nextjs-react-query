import { MenuProps } from 'antd'
import {
  bidding,
  docs,
  intro,
  price,
  project,
  projectInvestDevelopPath,
  projectNewlyAnnouncedPath,
  searchOrganization,
} from '../routes/layout'
import Link from 'next/link'

export const listNavItems = [
  {
    id: 1,
    name: 'Dự án',
    path: project,
  },
  {
    id: 2,
    name: 'Tra cứu tổ chức',
    path: searchOrganization,
  },
  {
    id: 3,
    name: 'Đấu thầu',
    path: bidding,
  },
  {
    id: 4,
    name: 'Bảng giá',
    path: price,
  },
  {
    id: 5,
    name: 'Tài liệu',
    path: docs,
  },
  {
    id: 6,
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
        Dự án mới được công bố
      </Link>
    ),
  },
]
// export const searchOrganizationItems: MenuProps['items'] = [
//   {
//     key: '1',
//     label: (
//       <Link
//         href={'searchOrganization/contractors'}
//         className="inline-flex items-center text-sm font-medium"
//       >
//         Nhà thầu
//       </Link>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <Link
//         href={'searchOrganization/investors'}
//         className="inline-flex items-center text-sm font-medium"
//       >
//         Nhà đầu tư - Bên mời thầu
//       </Link>
//     ),
//   },
// ]
