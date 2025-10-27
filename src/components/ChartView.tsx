import type { ChartViewProps } from '../types';
import { LineChartComponent } from './charts/LineChartComponent';
import { BangChanComponent } from './charts/BarChartComponent';
import { PieChartComponent } from './charts/PieChartComponent';

const charts = {
  'Line chart': LineChartComponent,
  'Bar chart': BangChanComponent,
  'Pie chart': PieChartComponent,
};

export const ChartView = ({ data, params, chartType }: ChartViewProps) => {
  const isDataCorrect = data && !data.error && data.values.length > 0;
  const Chart = charts[chartType] || LineChartComponent;

  return (
    <section className="container block chartView">
      <div className="info">
        Please take a screenshot to use this chart. Image download coming soon.
      </div>
      <div className="chartPreview">
        {
          isDataCorrect ? (
            <Chart {...params} data={data} />
          ) : (
            <span>Here will be the chart</span>
          )
        }
      </div>
    </section>
  );
};
