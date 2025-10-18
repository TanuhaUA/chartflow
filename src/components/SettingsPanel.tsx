import { useState } from 'react';

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

export const SettingsPanel = ({ handleChange }) => {
  const [isBarChart, setIsBarChart] = useState(false);

  const onTextareaChange = (event) => {
    handleChange(event.target.value);
  };

  const onChartTypeChange = (event) => {
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
          cols="30"
          rows="5"
          onChange={onTextareaChange}
        ></textarea>
        <div className="settingsPanel__info">
          To export CSV: File → Save As → CSV (comma delimited).
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
          <input type="checkbox" id="showChartTitle" />
          <label htmlFor="showChartTitle">Show chart title</label>
        </li>
        <li className="settingsPanel__setting">
          <input type="checkbox" id="showAxisLabels" />
          <label htmlFor="showAxisLabels">Show axis labels</label>
        </li>
        <li className="settingsPanel__setting">
          <input type="checkbox" id="showGridlines" />
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
