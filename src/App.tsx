import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SettingsPanel } from './components/SettingsPanel';
import { ChartView } from './components/ChartView';
import { parseCsv } from './utils/parseCsv';
import type { ChartDataObject, ChartType } from './types';

function App() {
  const [data, setData] = useState<ChartDataObject>({
    xAxis: '',
    yAxis: '',
    values: [],
  });
  const [reverseAxis, setReverseAxis] = useState(false);
  const [showAxis, setShowAxis] = useState(true);
  const [showAxisTicks, setShowAxisTicks] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showValues, setShowValues] = useState(false);

  const [chartType, setChartType] = useState<ChartType>('Bar chart');

  const onCsvChange = (csv: string) => {
    setData(parseCsv(csv));
  };

  const onReverseAxisChange = () => {
    setReverseAxis((prev) => !prev);
  };

  const onShowAxisChange = () => {
    setShowAxis((prev) => !prev);
  };

  const onShowAxisTicksChange = () => {
    setShowAxisTicks((prev) => !prev);
  };

  const onShowGridlinesChange = () => {
    setShowGrid((prev) => !prev);
  };

  const onShowValuesChange = () => {
    setShowValues((prev) => !prev);
  };

  const onChartTypeChange = (type: ChartType) => {
    setChartType(type);
  };

  return (
    <div className="content">
      <Header />
      <main className="main">
        <SettingsPanel
          error={data.error}
          chartType={chartType}
          handleDataChange={onCsvChange}
          reverseAxis={reverseAxis}
          showAxis={showAxis}
          showAxisTicks={showAxisTicks}
          showGrid={showGrid}
          showValues={showValues}
          handleReverseAxisChange={onReverseAxisChange}
          handleShowAxisChange={onShowAxisChange}
          handleShowAxisTicksChange={onShowAxisTicksChange}
          handleShowGridlinesChange={onShowGridlinesChange}
          handleShowValuesChange={onShowValuesChange}
          handleChartTypeChange={onChartTypeChange}
        />
        <ChartView data={data} params={{ reverseAxis, showAxis, showAxisTicks, showGrid, showValues }} chartType={chartType} />
        {/*<img src="/02-10-2025.png" alt="chart" width={500} />*/}
      </main>
      <Footer />
    </div>
  );
}

export default App;
