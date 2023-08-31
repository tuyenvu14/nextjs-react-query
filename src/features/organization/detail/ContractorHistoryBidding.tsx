import { Cell, Pie, PieChart, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface IContractorHistoryBiddingProps {
  data: any
}

export const ContractorHistoryBidding = (props: IContractorHistoryBiddingProps) => {
  const data = [
    { name: 'Trúng thầu', value: 400 },
    { name: 'Chưa có kết quả', value: 250 },
    { name: 'Trượt thầu', value: 250 },
  ]

  const COLORS = ['#0088FE', '#F59E0B', '#E5E5E5']

  return (
    <div className="px-4 text-sm grid grid-cols-3">
      <div className="lg:col-span-1">
        <p className="font-semibold text-center">
          Tổng quan <span className="text-main">(3927)</span>
        </p>
        <div style={{ width: '100%', height: '250px' }} className="flex">
          <ResponsiveContainer width="80%" height="80%" className={'m-auto'}>
            <PieChart>
              <Pie
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label
                fill="#8884d8"
                dataKey="value"
              >
                {data?.map((entry: any, index: any) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="lg:col-span-1">
        <p className="font-semibold text-center">
          Đấu với đối thủ <span className="text-main">(2140)</span>
        </p>
        <div style={{ width: '100%', height: '250px' }} className="flex">
          <ResponsiveContainer width="80%" height="80%" className={'m-auto flex'}>
            <PieChart>
              <Pie
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label
                fill="#8884d8"
                dataKey="value"
              >
                {data?.map((entry: any, index: any) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="lg:col-span-1">
        <p className="font-semibold text-center">
          Đấu thầu khi liên danh <span className="text-main">(725)</span>
        </p>
        <div style={{ width: '100%', height: '250px' }} className="flex">
          <ResponsiveContainer width="80%" height="80%" className={'m-auto'}>
            <PieChart>
              <Pie
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label
                fill="#8884d8"
                dataKey="value"
              >
                {data?.map((entry: any, index: any) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="col-span-3 flex justify-around px-10">
        {data.map((value, index) => (
          <div
            className="flex items-center"
            // onClick={() => {
            // }}
          >
            <span
              className="w-3 h-3 mr-2"
              style={{
                background: COLORS[index],
              }}
            />
            <div className="font-bold text-main">{value.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
