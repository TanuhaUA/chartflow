import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SettingsPanel } from './components/SettingsPanel';
import { ChartView } from './components/ChartView';
import { parseCsv } from './utils/parseCsv';

function App() {
  const [data, setData] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const [showAxis, setShowAxis] = useState(false);
  const [showAxisTicks, setShowAxisTicks] = useState(false);

  const onCsvChange = (csv: string) => {
    setData(parseCsv(csv));
  };

  const onShowAxisChange = () => {
    setShowAxis((prevShowAxis) => !prevShowAxis);
  };
  const onShowAxisTicksChange = () => {
    setShowAxisTicks((prevShowAxisTicks) => !prevShowAxisTicks);
  };

  const onShowGridlinesChange = () => {
    setShowGrid((prevShowGrid) => !prevShowGrid);
  };

  return (
    <div className="content">
      <Header />
      <main className="main">
        <SettingsPanel
          handleDataChange={onCsvChange}
          showAxis={showAxis}
          showAxisTicks={showAxisTicks}
          showGrid={showGrid}
          handleShowAxisChange={onShowAxisChange}
          handleShowAxisTicksChange={onShowAxisTicksChange}
          handleShowGridlinesChange={onShowGridlinesChange}
        />
        <ChartView data={data} params={{ showGrid, showAxis, showAxisTicks }} />
        <img src="/02-10-2025.png" alt="chart" width={500} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
