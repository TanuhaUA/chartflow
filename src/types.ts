export type ChartParams = {
  reverseAxis: boolean,
  showGrid: boolean,
  showAxis: boolean,
  showAxisTicks: boolean,
  showValues: boolean,
  chartTheme: ChartTheme,
};

export type ChartViewProps = {
  data: ChartDataObject,
  params: ChartParams,
  chartType: ChartType,
};

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
