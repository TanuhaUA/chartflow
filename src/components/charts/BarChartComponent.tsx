import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import { getPalette } from '../../utils/getPalette';
import type { ChartDataObject, ChartParams } from '../../types';

type LineChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const BangChanComponent = ({
  chartTheme,
  reverseAxis,
  showAxis,
  showAxisTicks,
  showGrid,
  showValues,
  data,
}: LineChartComponentProps) => {
  const {
    bgColor,
    axesStroke,
    gradientBottom,
    gradientTop,
  } = getPalette(chartTheme);

  return (
    <BarChart
      style={{ background: bgColor }}
      width={800} height={400} data={data.values}
      responsive
      margin={{ top: 50, right: 30, left: 20, bottom: 50 }}
    >
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientTop} stopOpacity={1} />
          <stop offset="100%" stopColor={gradientBottom} stopOpacity={1} />
        </linearGradient>
      </defs>
      {showGrid && <CartesianGrid strokeDasharray="3 3" />}
      <XAxis
        dataKey={reverseAxis ? data.yAxis : data.xAxis}
        stroke={axesStroke}
        hide={!showAxis}
        tick={showAxisTicks}
        tickLine={showAxisTicks}
        tickSize={-6}
        tickMargin={20}
      />
      <YAxis
        stroke={axesStroke}
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
            <LabelList dataKey={reverseAxis ? data.xAxis : data.yAxis} position="top" offset={10} fill={axesStroke} />
          )
        }
      </Bar>
    </BarChart>
  );
};
