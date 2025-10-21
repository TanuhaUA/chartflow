import { COLOR_PALETTE, DEFAULT_THEME } from '../const.ts';

export const getPalette = (theme) => {
  return COLOR_PALETTE[theme] || COLOR_PALETTE[DEFAULT_THEME];
};