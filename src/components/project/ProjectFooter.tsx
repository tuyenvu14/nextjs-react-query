import { Pagination } from 'antd'
import { useRouter } from 'next/router'
interface ProjectFooterProps {
  pagination?: {
    total: number | undefined
    pageIndex: number
    pageSize: number
  }
  onPageChange(page: number, pageSize: number): void
}

export const ProjectFooter = (props: ProjectFooterProps) => {
  // const router = useRouter()
  const onPageChange = (page: number, pageSize: number) => {
    // console.log(page, pageSize, '-------------')
    props.onPageChange(page, pageSize)
  }
  return (
    <Pagination
      className="text-end"
      current={props.pagination?.pageIndex}
      pageSize={props.pagination?.pageSize}
      total={props.pagination?.total}
      // showTotal={(total, range) => `${range[0]}-${range[1]} của ${total} dự án`}
      showSizeChanger
      onChange={onPageChange}
    />
  )
}
