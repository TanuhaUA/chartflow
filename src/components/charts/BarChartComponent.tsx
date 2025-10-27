import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import { getPalette } from '../../utils/getPalette';
import type { ChartDataObject, ChartParams } from '../../types';

type LineChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const BangChanComponent = ({
  chartTheme,
  swapAxes,
  showAxes,
  showAxesLabels,
  showVerticalGrid,
  showHorizontalGrid,
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
      data={data.values}
      height={400}
      width="100%"
      responsive
      style={{ background: bgColor, maxWidth: '900px' }}
      margin={{ top: 50, right: 30, left: 20, bottom: 50 }}
    >
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientTop} stopOpacity={1} />
          <stop offset="100%" stopColor={gradientBottom} stopOpacity={1} />
        </linearGradient>
      </defs>
      <CartesianGrid
        strokeDasharray="3 3"
        horizontal={showHorizontalGrid}
        vertical={showVerticalGrid}
        strokeOpacity={0.4}
      />
      <XAxis
        dataKey={swapAxes ? data.yAxis : data.xAxis}
        stroke={axesStroke}
        hide={!showAxes}
        tick={showAxesLabels}
        tickLine={showAxesLabels}
        tickSize={-6}
        tickMargin={20}
      />
      <YAxis
        stroke={axesStroke}
        hide={!showAxes}
        tick={showAxesLabels}
        tickLine={showAxesLabels}
        tickSize={-6}
        tickMargin={20}
      />
      <Bar
        dataKey={swapAxes ? data.xAxis : data.yAxis}
        radius={[10, 10, 0, 0]}
        fill="url(#colorGradient)"
      >
        {
          showValues && (
            <LabelList dataKey={swapAxes ? data.xAxis : data.yAxis} position="top" offset={10} fill={axesStroke} />
          )
        }
      </Bar>
    </BarChart>
  );
};
