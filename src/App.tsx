import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SettingsPanel } from './components/SettingsPanel';
import { ChartView } from './components/ChartView';
import { parseCsv } from './utils/parseCsv';
import { DEFAULT_THEME } from './const';
import { settingsCheckboxes, initialCheckboxesValues } from './utils/chartSettings';
import type { ChartDataObject, ChartTheme, ChartType, SettingsInitialValues } from './types';

function App() {
  const [data, setData] = useState<ChartDataObject>({
    xAxis: '',
    yAxis: '',
    values: [],
  });
  const [chartTheme, setChartTheme] = useState<ChartTheme>(DEFAULT_THEME);
  const [chartType, setChartType] = useState<ChartType>('Line chart');
  const [settingsValues, setSettingsValues] = useState<SettingsInitialValues>(initialCheckboxesValues);

  const onSettingsChange = (id: keyof SettingsInitialValues) => {
    setSettingsValues({
      ...settingsValues,
      [id]: !settingsValues[id],
    });
  };

  const onCsvChange = useCallback((csv: string) => {
    setData(parseCsv(csv));
  }, []);

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
          checkboxes={settingsCheckboxes}
          checkboxesValues={settingsValues}
          handleCheckboxChange={onSettingsChange}
          handleDataChange={onCsvChange}
          handleChartTypeChange={onChartTypeChange}
          handleChartThemeChange={onChartThemeChange}
        />
        <ChartView
          data={data}
          params={{ chartTheme, ...settingsValues }}
          chartType={chartType}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
