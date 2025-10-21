import { PieChart, Pie, LabelList } from 'recharts';
import type { ChartDataObject, ChartParams } from '../../types';

type PieChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const PieChartComponent = ({
  showValues,
  data,
}: PieChartComponentProps) => {
  return (
    <PieChart
      style={{
        background: '#000723',
        maxWidth: '500px',
        aspectRatio: 1,
      }}
      width={400}
      height={400}
    >
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#01adf6" stopOpacity={1} />
          <stop offset="100%" stopColor="#051e70" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Pie
        data={data.values.map(d => ({ ...d, [data.yAxis]: +d[data.yAxis] }))}
        dataKey={data.yAxis}
        nameKey={data.xAxis}
        fill="url(#colorGradient)"
        stroke="#000723"
        label={showValues}
      >
        {
          showValues && (
            <LabelList dataKey={data.xAxis} position="top" offset={10} fill="#0caff8" />
          )
        }
      </Pie>
    </PieChart>
  );
};
