import * as React from 'react';
import type { ChartParams, ChartType } from '../types';
import  { chartTypes, chartTheme } from '../types';

const textareaPlaceholder = `Paste CSV content here. For example:
month,number
June,10
July,30
August,20
`;

type SettingsPanelProps = {
  error: string | undefined,
  chartType: ChartType,
  handleDataChange: (csv: string) => void,
  handleChartTypeChange: (value: ChartType) => void,
  handleReverseAxisChange: () => void,
  handleShowAxisChange: () => void,
  handleShowAxisTicksChange: () => void,
  handleShowValuesChange: () => void,
  handleShowGridlinesChange: () => void,
} & ChartParams;

export const SettingsPanel = ({
  error,
  chartType,
  reverseAxis,
  showAxis,
  showAxisTicks,
  showGrid,
  showValues,
  handleDataChange,
  handleChartTypeChange,
  handleReverseAxisChange,
  handleShowAxisChange,
  handleShowAxisTicksChange,
  handleShowGridlinesChange,
  handleShowValuesChange,
}: SettingsPanelProps) => {
  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleDataChange(event.target.value);
  };

  const onChartTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChartTypeChange(event.target.value as ChartType);
  };

  return (
    <section className="container block settingsPanel">
      <div>
        <div className="settingsPanel__error error">
          {
            error || ' '
          }
        </div>
        <textarea
          className="settingsPanel__textarea"
          placeholder={textareaPlaceholder}
          name="csv"
          id="csv"
          cols={30}
          rows={5}
          onChange={onTextareaChange}
        ></textarea>
        <div className="settingsPanel__info info">
          To save data from your spreadsheet as CSV: File → Save As (or Download) → CSV (Comma Delimited)
        </div>
      </div>
      <ul className="settingsPanel__settings">
        <li className="settingsPanel__setting">
          <select name="chartType" id="chartType" onChange={onChartTypeChange} value={chartType}>
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
          <input type="checkbox" id="reverseAxis" checked={reverseAxis} onChange={handleReverseAxisChange} />
          <label htmlFor="reverseAxis">Reverse axis</label>
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
        <li className="settingsPanel__setting">
          <input type="checkbox" id="showValuesAboveBars" checked={showValues} onChange={handleShowValuesChange} />
          <label htmlFor="showValuesAboveBars">Show values on the chart</label>
        </li>
      </ul>
    </section>
  );
};
