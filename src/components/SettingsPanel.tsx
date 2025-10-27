import * as React from 'react';
import { CSVTextarea } from './CSVTextarea';
import type { ChartType, ChartTheme, SettingsCheckboxes, SettingsInitialValues } from '../types';
import { chartTypes, chartThemes } from '../types';

type SettingsPanelProps = {
  error: string | undefined,
  chartType: ChartType,
  chartTheme: ChartTheme,
  checkboxes: SettingsCheckboxes,
  checkboxesValues: SettingsInitialValues,
  handleCheckboxChange: (value: keyof SettingsInitialValues) => void,
  handleDataChange: (csv: string) => void,
  handleChartTypeChange: (value: ChartType) => void,
  handleChartThemeChange: (value: ChartTheme) => void,
};

export const SettingsPanel = ({
  error,
  chartType,
  chartTheme,
  checkboxes,
  checkboxesValues,
  handleCheckboxChange,
  handleDataChange,
  handleChartTypeChange,
  handleChartThemeChange,
}: SettingsPanelProps) => {
  const onChartTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChartTypeChange(event.target.value as ChartType);
  };

  const onChartThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChartThemeChange(event.target.value as ChartTheme);
  };

  return (
    <section className="container block settingsPanel">
      <CSVTextarea error={error} handleDataChange={handleDataChange} />
      <div className="settingsPanel__settings">
        <div  className="settingsPanel__fieldsets">
          <fieldset className="settingsPanel__fieldset">
            <legend>Chart type</legend>
            {
              chartTypes.map((type) => {
                return (
                  <div className="settingsPanel__fieldset-item" key={type}>
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
          <fieldset className="settingsPanel__fieldset">
            <legend>Chart theme</legend>
            {
              chartThemes.map((theme) => {
                return (
                  <div className="settingsPanel__fieldset-item" key={theme}>
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
        <ul className="settingsPanel__checkboxes">
          {
            checkboxes
              .filter(({ forbiddenChartTypes }) => !forbiddenChartTypes.includes(chartType))
              .map(({ id, label }) => {
              return (
                <li key={id}>
                  <input type="checkbox" id={id} checked={checkboxesValues[id]} onChange={() => handleCheckboxChange(id)} />
                  <label htmlFor={id}>{label}</label>
                </li>
              );
            })
          }
        </ul>
      </div>
    </section>
  );
};
