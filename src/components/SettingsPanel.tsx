import * as React from 'react';
import type { ChartParams, ChartType, ChartTheme } from '../types';
import  { chartTypes, chartThemes } from '../types';

const { useState } = React;

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
  handleChartThemeChange: (value: ChartTheme) => void,
  handleReverseAxisChange: () => void,
  handleShowAxisChange: () => void,
  handleShowAxisTicksChange: () => void,
  handleShowValuesChange: () => void,
  handleShowGridlinesChange: () => void,
} & ChartParams;

export const SettingsPanel = ({
  error,
  chartType,
  chartTheme,
  reverseAxis,
  showAxis,
  showAxisTicks,
  showGrid,
  showValues,
  handleDataChange,
  handleChartTypeChange,
  handleChartThemeChange,
  handleReverseAxisChange,
  handleShowAxisChange,
  handleShowAxisTicksChange,
  handleShowGridlinesChange,
  handleShowValuesChange,
}: SettingsPanelProps) => {
  const [isPieChart, setIsPieChart] = useState(chartType === 'Pie chart');

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleDataChange(event.target.value);
  };

  const onChartTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPieChart(event.target.value === 'Pie chart');
    handleChartTypeChange(event.target.value as ChartType);
  };

  const onChartThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChartThemeChange(event.target.value as ChartTheme);
  };

  return (
    <section className="container block settingsPanel">
      <div className="settingsPanel__csvArea">
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
          <span>To save data from your spreadsheet as CSV:&nbsp;</span>
          <span>File → Save As (or Download) → CSV (Comma Delimited)</span>
        </div>
      </div>
      <div className="settingsPanel__settings">
        <div>
          <div className="settingsPanel__setting">
            <fieldset className="fieldset">
              <legend>Chart type</legend>
              {
                chartTypes.map((type) => {
                  return (
                    <div>
                      <input
                        key={type}
                        type="radio"
                        name="chartType"
                        id={`chartType-${type}`}
                        value={type}
                        checked={type === chartType}
                        onChange={onChartTypeChange}
                      />
                      <label htmlFor={`chartType-${type}`}>{type}</label>
                    </div>
                  );
                })
              }
            </fieldset>
          </div>
          <div className="settingsPanel__setting">
            <fieldset className="fieldset">
              <legend>Chart theme</legend>
              {
                chartThemes.map((theme) => {
                  return (
                    <div>
                      <input
                        key={theme}
                        type="radio"
                        name="chartTheme"
                        id={`chartTheme-${theme}`}
                        value={theme}
                        checked={theme === chartTheme}
                        onChange={onChartThemeChange}
                      />
                      <label htmlFor={`chartTheme-${theme}`}>{theme}</label>
                    </div>
                  );
                })
              }
            </fieldset>
          </div>
        </div>
        <ul className="settingsPanel__checkboxes">
          {
            !isPieChart && (
              <>
                <li className="settingsPanel__setting">
                  <input type="checkbox" id="reverseAxis" checked={reverseAxis} onChange={handleReverseAxisChange} />
                  <label htmlFor="reverseAxis">Swap axes</label>
                </li>
                <li className="settingsPanel__setting">
                  <input type="checkbox" id="showAxis" checked={showAxis} onChange={handleShowAxisChange} />
                  <label htmlFor="showAxis">Show axes</label>
                </li>
                <li className="settingsPanel__setting">
                  <input type="checkbox" id="showAxisLabels" checked={showAxisTicks} onChange={handleShowAxisTicksChange} />
                  <label htmlFor="showAxisLabels">Show axes labels</label>
                </li>
                <li className="settingsPanel__setting">
                  <input type="checkbox" id="showGridlines" checked={showGrid} onChange={handleShowGridlinesChange} />
                  <label htmlFor="showGridlines">Show gridlines</label>
                </li>
              </>
            )
          }
          <li className="settingsPanel__setting">
            <input type="checkbox" id="showValuesAboveBars" checked={showValues} onChange={handleShowValuesChange} />
            <label htmlFor="showValuesAboveBars">Show values on the chart</label>
          </li>
        </ul>
      </div>
    </section>
  );
};
