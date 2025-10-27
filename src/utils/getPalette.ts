import { COLOR_PALETTE, DEFAULT_THEME } from '../const';
import type { ChartTheme } from '../types';

export const getPalette = (theme: ChartTheme) => {
  return COLOR_PALETTE[theme] || COLOR_PALETTE[DEFAULT_THEME];
};