import type { SettingsCheckboxes, SettingsInitialValues } from '../types';

export const settingsCheckboxes: SettingsCheckboxes = [
  {
    id: 'swapAxes',
    label: 'Swap axes',
    initialValue: false,
    forbiddenChartTypes: ['Pie chart'],
  },
  {
    id: 'showAxes',
    label: 'Show axes',
    initialValue: true,
    forbiddenChartTypes: ['Pie chart'],
  },
  {
    id: 'showAxesLabels',
    label: 'Show axes labels',
    initialValue: true,
    forbiddenChartTypes: ['Pie chart'],
  },
  {
    id: 'showVerticalGrid',
    label: 'Show vertical gridlines',
    initialValue: false,
    forbiddenChartTypes: ['Pie chart'],
  },
  {
    id: 'showHorizontalGrid',
    label: 'Show horizontal gridlines',
    initialValue: false,
    forbiddenChartTypes: ['Pie chart'],
  },
  {
    id: 'showValues',
    label: 'Show values on the chart',
    initialValue: false,
    forbiddenChartTypes: [],
  },
];

export const initialCheckboxesValues: SettingsInitialValues = settingsCheckboxes.reduce((acc, { id, initialValue }) => {
  acc[id] = initialValue;
  return acc;
}, {} as SettingsInitialValues);
