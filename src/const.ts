import { chartThemes } from './types.ts';

export const DEFAULT_THEME = 'Dark';

export const COLOR_PALETTE = {
  Dark: {
    bgColor: '#000f2c',
    axesStroke: '#7ec4ff',
    lineColor: '#2e5bff',
    gradientBottom: '#041d60',
    gradientTop: '#00a8ff',
  },
  Light: {
    bgColor: '#ffffff',
    axesStroke: '#333333',
    lineColor: '#007acc',
    gradientBottom: '#cce6ff',
    gradientTop: '#66b3ff',
  },
  Pastel: {
    bgColor: '#fefbf5',
    axesStroke: '#8f899e',
    lineColor: '#a3d2ca',
    gradientBottom: '#e6f0ea',
    gradientTop: '#b9e4d0',
  },
  Vivid: {
    bgColor: '#1a1a1a',
    axesStroke: '#ffffff',
    lineColor: '#ff3f3f',
    gradientBottom: '#ff9900',
    gradientTop: '#ff1aff',
  },
};
