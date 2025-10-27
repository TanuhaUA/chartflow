import type { ChartDataObject } from '../types';

const LINE_BREAK = '\n';
const VALUES_SEPARATOR = ',';

const getXandY = (string: string) => {
  const [x, y] = string
    .split(VALUES_SEPARATOR)
    .map(value => value.trim() || '');

  return [x, y];
};

export const parseCsv = (csv: string = '') => {
  let dataObject: ChartDataObject = {
    xAxis: '',
    yAxis: '',
    values: [],
  };

  const lines = csv
    .trim()
    .split(LINE_BREAK)
    .map(line => line.trim() || '')
    .filter(Boolean);

  if (lines.length < 2) {
    dataObject.error = 'CSV must include a header and one data row';
  } else {
    const [axisNamesLine, ...valuesLines] = lines;
    const [xAxis, yAxis] = getXandY(axisNamesLine);

    const values = valuesLines.map(line => {
      const [xValue, yValue] = getXandY(line);

      return {
        [xAxis]: xValue,
        [yAxis]: yValue,
      };
    });

    dataObject = {
      xAxis,
      yAxis,
      values,
    }
  }

  return dataObject;
};
