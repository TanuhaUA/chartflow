import { PieChart, Pie, LabelList } from 'recharts';
import { getPalette } from '../../utils/getPalette';
import type { ChartDataObject, ChartParams } from '../../types';

type PieChartComponentProps = ChartParams & {
  data: ChartDataObject,
};

export const PieChartComponent = ({
  chartTheme,
  showValues,
  data,
}: PieChartComponentProps) => {
  const {
    bgColor,
    axesStroke,
    gradientBottom,
    gradientTop,
  } = getPalette(chartTheme);

  return (
    <PieChart
      width={400}
      height={400}
      style={{ background: bgColor }}
    >
      <defs>
        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientTop} stopOpacity={1} />
          <stop offset="100%" stopColor={gradientBottom} stopOpacity={1} />
        </linearGradient>
      </defs>
      <Pie
        data={data.values.map(d => ({ ...d, [data.yAxis]: +d[data.yAxis] }))}
        dataKey={data.yAxis}
        nameKey={data.xAxis}
        fill="url(#colorGradient)"
        stroke={bgColor}
        label={showValues}
      >
        {
          showValues && (
            <LabelList dataKey={data.xAxis} position="top" offset={10} fill={axesStroke} />
          )
        }
      </Pie>
    </PieChart>
  );
};
