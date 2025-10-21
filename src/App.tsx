import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SettingsPanel } from './components/SettingsPanel';
import { ChartView } from './components/ChartView';
import { parseCsv } from './utils/parseCsv';
import { DEFAULT_THEME } from './const';
import type { ChartDataObject, ChartTheme, ChartType } from './types';

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

  const [chartTheme, setChartTheme] = useState<ChartTheme>(DEFAULT_THEME);
  const [chartType, setChartType] = useState<ChartType>('Line chart');

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


  const onChartThemeChange = (theme: ChartTheme) => {
    setChartTheme(theme);
  };

  return (
    <div className="content">
      <Header />
      <main className="main">
        <SettingsPanel
          error={data.error}
          chartType={chartType}
          chartTheme={chartTheme}
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
          handleChartThemeChange={onChartThemeChange}
        />
        <ChartView data={data} params={{ chartTheme, reverseAxis, showAxis, showAxisTicks, showGrid, showValues }} chartType={chartType} />
        {/*<img src="/02-10-2025.png" alt="chart" width={500} />*/}
      </main>
      <Footer />
    </div>
  );
}

export default App;
