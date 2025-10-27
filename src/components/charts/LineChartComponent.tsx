import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import { getPalette } from '../../utils/getPalette';
import type { ChartDataObject, ChartParams } from '../../types';

type LineChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const LineChartComponent = ({
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
    lineColor,
  } = getPalette(chartTheme);

  return (
    <LineChart
      data={data.values}
      width="100%"
      height={400}
      responsive
      style={{ background: bgColor, maxWidth: '900px' }}
      margin={{ top: 50, right: 50, left: 20, bottom: 50 }}
    >
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
      <Line
        dataKey={swapAxes ? data.xAxis : data.yAxis}
        type="monotone"
        dot={{ stroke: axesStroke, strokeWidth: 1, fill: lineColor }}
        stroke={lineColor}
        strokeWidth={3}
      >
        {
          showValues && (
            <LabelList
              dataKey={swapAxes ? data.xAxis : data.yAxis}
              position="top"
              offset={20}
              fill={axesStroke}
            />
          )
        }
      </Line>
    </LineChart>
  );
};
