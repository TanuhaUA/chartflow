import { LineChartComponent } from './charts/LineChartComponent';
import type { ChartViewProps } from '../types';

export const ChartView = ({ data, params }: ChartViewProps) => {
  return (
    <section className="container block">
      <h2 className="subtitle">Chart</h2>
      <div className="chartPreview">
        <div>
          {
            data ? (
              <LineChartComponent {...params}/>
            ) : (
              <span>Here will be the chart</span>
            )
          }
        </div>
      </div>
    </section>
  );
};
