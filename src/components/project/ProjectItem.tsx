import { Project } from '@/src/generated/graphql'
import { CopyIcon, EyeIcon, ZapIcon } from '../icons'

interface IProjectItemProps {
  data: Project
}

export const ProjectItem = (props: IProjectItemProps) => {
  const { data } = props
  return (
    <div>
      <div className="rounded-md border border-border">
        <div className="p-2 bg-main">
          <span className="rounded-md border px-2 py-1 bg-white text-sm">
            <CopyIcon className="mr-1 text-main" />
            {data?.id} - <span className="text-main">{data?.version}</span>
          </span>
        </div>
        <div style={{ borderBottomWidth: 1 }} className="px-8 py-2">
          <p className="text-xl font-normal text-default mb-4">{data?.name ?? '-'}</p>
          <div className="flex justify-between text-sm font-light">
            <div>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>Chủ đầu tư: {data?.investorName ?? '-'}</span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Tổng mức đầu tư: <span className="font-bold">{data?.totalInvestment ?? '-'}</span>
                </span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>Địa điểm: {data?.provinceCode ?? '-'}</span>
              </p>
            </div>
            <div>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>Loại dự án: {data?.groupCode ?? '-'}</span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>Thời điểm công bố: {data?.publishedAt ?? '-'}</span>
              </p>
              <p className="mb-2">
                <ZapIcon className="text-main mr-2" />
                <span>
                  Tổng số phiên bản: <span className="font-bold">{data?.version ?? '-'}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-2">
          <EyeIcon className="mr-2 text-secondary" />
          100
          {/* {props?.data?.view ?? 100} */}
        </div>
      </div>
    </div>
  )
}
