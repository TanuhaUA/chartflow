import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import type { ChartDataObject, ChartParams } from '../../types';

// const data = [
//   {
//     name: 'Full-Stack Engineer',
//     percentage: '4',
//   },
//   {
//     name: 'Front-End Engineer',
//     percentage: '11',
//   },
//   {
//     name: 'Front-End Dev',
//     percentage: '17',
//   },
//   {
//     name: 'Frontend Dev',
//     percentage: '19',
//   },
//   {
//     name: 'Other',
//     percentage: '49',
//   },
// ];

type LineChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const LineChartComponent = ({
  reverseAxis,
  showAxis,
  showAxisTicks,
  showGrid,
  showValues,
  data,
}: LineChartComponentProps) => {
  return (
    <LineChart
      style={{ background: '#000723' }}
      width={800} height={400} data={data.values}
      responsive
      margin={{ top: 50, right: 30, left: 20, bottom: 50 }}
    >
      {/*<defs>*/}
      {/*  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">*/}
      {/*    <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />*/}
      {/*  </filter>*/}
      {/*</defs>*/}
      {showGrid && <CartesianGrid strokeDasharray="2 2" />}
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
      <Line
        dataKey={reverseAxis ? data.xAxis : data.yAxis}
        type="monotone"
        dot={{ stroke: '#0caff8', strokeWidth: 1, fill: '#1d54e7' }}
        stroke="#1d54e7"
        strokeWidth={3}
      >
        {
          showValues && (
            <LabelList
              dataKey={reverseAxis ? data.xAxis : data.yAxis}
              position="top"
              offset={20}
              fill="#0caff8"
            />
          )
        }
      </Line>
    </LineChart>
  );
};
