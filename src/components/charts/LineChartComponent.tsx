import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList } from 'recharts';
import { getPalette } from '../../utils/getPalette';
import type { ChartDataObject, ChartParams } from '../../types';

type LineChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const LineChartComponent = ({
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
    lineColor,
  } = getPalette(chartTheme);

  return (
    <LineChart
      style={{ background: bgColor }}
      width={800} height={400} data={data.values}
      responsive
      margin={{ top: 50, right: 30, left: 20, bottom: 50 }}
    >
      {showGrid && <CartesianGrid strokeDasharray="2 2" />}
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
      <Line
        dataKey={reverseAxis ? data.xAxis : data.yAxis}
        type="monotone"
        dot={{ stroke: axesStroke, strokeWidth: 1, fill: lineColor }}
        stroke={lineColor}
        strokeWidth={3}
      >
        {
          showValues && (
            <LabelList
              dataKey={reverseAxis ? data.xAxis : data.yAxis}
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
