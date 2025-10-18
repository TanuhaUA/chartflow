import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SettingsPanel } from './components/SettingsPanel';
import { ChartView } from './components/ChartView';

function App() {
  const [csv, setCsv] = useState<string>('');

  const onCsvChange = (value) => {
    setCsv(value);
  };

  return (
    <div className="content">
      <Header />
      <main className="main">
        <SettingsPanel handleChange={onCsvChange} />
        <ChartView csv={csv} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
