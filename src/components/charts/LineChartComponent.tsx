import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import type { ChartProps } from '../../types';

const data = [
  {
    name: 'Full-Stack Engineer',
    percentage: 4,
  },
  {
    name: 'Front-End Engineer',
    percentage: 11,
  },
  {
    name: 'Front-End Dev',
    percentage: 17,
  },
  {
    name: 'Frontend Dev',
    percentage: 19,
  },
  {
    name: 'Other',
    percentage: 49,
  },
];

export const LineChartComponent = ({ showGrid, showAxis, showAxisTicks }: ChartProps) => {
  return (
    <LineChart
      style={{ background: '#000723' }}
      width={800} height={400} data={data}
      responsive
      margin={{ top: 50, right: 30, left: 20, bottom: 50 }}
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      {showGrid && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis
        dataKey="name"
        stroke="#0caff8"
        hide={!showAxis}
        padding={{ right: 10 }}
        tick={showAxisTicks}
        tickLine={showAxisTicks}
        tickSize={-6}
        tickMargin={20}
      />
      <YAxis
        stroke="#0caff8"
        hide={!showAxis}
        padding={{ top: 10 }}
        tick={showAxisTicks}
        tickLine={showAxisTicks}
        tickSize={-6}
        tickMargin={20}
      />
      <Line
        dataKey="percentage"
        type="monotone"
        dot={{ stroke: '#0caff8', strokeWidth: 1, fill: '#1d54e7' }}
        stroke="#1d54e7"
        strokeWidth={3}
      />
    </LineChart>
  );
};
