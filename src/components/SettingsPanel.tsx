import * as React from 'react';
import type { ChartProps } from '../types';

const { useState } = React;

const chartTypes = [
  'Line chart',
  'Bar chart',
  'Pie chart',
];

const chartTheme = [
  'Light',
  'Dark',
  'Pastel',
  'Vivid',
];

type SettingsPanelProps = {
  handleDataChange: (csv: string) => void,
  handleShowAxisChange: () => void,
  handleShowAxisTicksChange: () => void,
  handleShowGridlinesChange: () => void,
} & ChartProps;

export const SettingsPanel = ({
  showGrid,
  showAxis,
  showAxisTicks,
  handleDataChange,
  handleShowAxisChange,
  handleShowAxisTicksChange,
  handleShowGridlinesChange,
}: SettingsPanelProps) => {
  const [isBarChart, setIsBarChart] = useState(false);

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleDataChange(event.target.value);
  };

  const onChartTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsBarChart(event.target.value === 'Bar chart');
  };

  return (
    <section className="container block settingsPanel">
      <div>
        <textarea
          className="settingsPanel__textarea"
          placeholder="Paste CSV content here"
          name="csv"
          id="csv"
          cols={30}
          rows={5}
          onChange={onTextareaChange}
        ></textarea>
        <div className="settingsPanel__info">
          To export CSV: File → Save As → CSV (comma delimited)
        </div>
      </div>
      <ul className="settingsPanel__settings">
        <li className="settingsPanel__setting">
          <select name="chartType" id="chartType" onChange={onChartTypeChange}>
            <option value="" disabled>Chart Type</option>
            {
              chartTypes.map((type) => {
                return (
                  <option value={type} key={type}>{type}</option>
                );
              })
            }
          </select>
        </li>
        <li className="settingsPanel__setting">
          <select name="chartTheme" id="chartTheme">
            <option value="" disabled>Chart Theme</option>
            {
              chartTheme.map((theme) => {
                return (
                  <option value={theme} key={theme}>{theme}</option>
                );
              })
            }
          </select>
        </li>
        <li className="settingsPanel__setting">
          <input type="checkbox" id="showAxis" checked={showAxis} onChange={handleShowAxisChange} />
          <label htmlFor="showAxis">Show axis</label>
        </li>
        <li className="settingsPanel__setting">
          <input type="checkbox" id="showAxisLabels" checked={showAxisTicks} onChange={handleShowAxisTicksChange} />
          <label htmlFor="showAxisLabels">Show axis labels</label>
        </li>
        <li className="settingsPanel__setting">
          <input type="checkbox" id="showGridlines" checked={showGrid} onChange={handleShowGridlinesChange} />
          <label htmlFor="showGridlines">Show gridlines</label>
        </li>
        {
          isBarChart && (
            <li className="settingsPanel__setting">
              <input type="checkbox" id="showValuesAboveBars" />
              <label htmlFor="showValuesAboveBars">Show values above bars</label>
            </li>
          )
        }
      </ul>
    </section>
  );
};
