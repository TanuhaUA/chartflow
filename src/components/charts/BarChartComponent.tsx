import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import type { ChartDataObject, ChartParams } from '../../types';

type LineChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const BangChanComponent = ({
  reverseAxis,
  showAxis,
  showAxisTicks,
  showGrid,
  showValues,
  data,
}: LineChartComponentProps) => {
  return (
    <BarChart
      style={{ background: '#000723' }}
      width={800} height={400} data={data.values}
      responsive
      margin={{ top: 50, right: 30, left: 20, bottom: 50 }}
    >
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#01adf6" stopOpacity={1} />
          <stop offset="100%" stopColor="#051e70" stopOpacity={1} />
          {/*<stop offset="0%" stopColor="#8884d8" stopOpacity={1} />*/}
          {/*<stop offset="100%" stopColor="#82ca9d" stopOpacity={1} />*/}
        </linearGradient>
      </defs>
      {showGrid && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis
        dataKey={reverseAxis ? data.yAxis : data.xAxis}
        stroke="#0caff8"
        hide={!showAxis}
        tick={showAxisTicks}
        tickLine={showAxisTicks}
        tickSize={-6}
        tickMargin={20}
      />
      <YAxis
        stroke="#0caff8"
        hide={!showAxis}
        tick={showAxisTicks}
        tickLine={showAxisTicks}
        tickSize={-6}
        tickMargin={20}
      />
      <Bar
        dataKey={reverseAxis ? data.xAxis : data.yAxis}
        radius={[15, 15, 0, 0]}
        fill="url(#colorGradient)"
      >
        {
          showValues && (
            <LabelList dataKey={reverseAxis ? data.xAxis : data.yAxis} position="top" offset={10} fill="#0caff8" />
          )
        }
      </Bar>
    </BarChart>
  );
};
