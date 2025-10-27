export type ChartParams = {
  swapAxes: boolean,
  showVerticalGrid: boolean,
  showHorizontalGrid: boolean,
  showAxes: boolean,
  showAxesLabels: boolean,
  showValues: boolean,
  chartTheme: ChartTheme,
};

export type ChartViewProps = {
  data: ChartDataObject,
  params: ChartParams,
  chartType: ChartType,
};

export type SettingsInitialValues = Omit<ChartParams, 'chartTheme'>;

export type SettingsCheckbox = {
  id: keyof SettingsInitialValues,
  label: string,
  initialValue: boolean,
  forbiddenChartTypes: string[],
};

export type SettingsCheckboxes = SettingsCheckbox[];

export type ChartValue = {
  [key: string]: string | number,
};

export type ChartDataObject = {
  xAxis: string | number,
  yAxis: string | number,
  values: ChartValue[],
  error?: string,
};

export const chartTypes = [
  'Line chart',
  'Bar chart',
  'Pie chart',
] as const;

export type ChartType = typeof chartTypes[number];

export const chartThemes = [
  'Dark',
  'Light',
  'Pastel',
  'Vivid',
] as const;

export type ChartTheme = typeof chartThemes[number];
