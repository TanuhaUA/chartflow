export type ChartProps = {
  showGrid: boolean,
  showAxis: boolean,
  showAxisTicks: boolean,
};

export type ChartViewProps = {
  data: Array<unknown>,
  params: ChartProps,
};
