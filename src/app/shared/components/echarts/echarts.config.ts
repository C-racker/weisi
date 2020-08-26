import { Injectable } from '@angular/core';

export const EChartsThemeName = 'echarts-yun';

export function EChartsRegisterTheme(type: string): void {
  if (!(window as any).echarts) {
    return;
  }
  if (type === 'dark') {
    darkTheme();
  } else {
    defaultTheme();
  }
}

// Register infographic theme
// https://www.echartsjs.com/theme-builder/
function defaultTheme(): void {
  const colorPalette = [
    '#2ec7c9',
    '#b6a2de',
    '#5ab1ef',
    '#ffb980',
    '#d87a80',
    '#8d98b3',
    '#e5cf0d',
    '#97b552',
    '#95706d',
    '#dc69aa',
    '#07a2a4',
    '#9a7fd1',
    '#588dd5',
    '#f5994e',
    '#c05050',
    '#59678c',
    '#c9ab00',
    '#7eb00a',
    '#6f5553',
    '#c14089',
  ];

  const theme = {
    color: colorPalette,

    title: {
      left: 'left',
      textStyle: {
        fontWeight: 'normal',
        color: '#333',
      },
    },

    visualMap: {
      itemWidth: 15,
      color: ['#5ab1ef', '#e0ffff'],
    },

    toolbox: {
      iconStyle: {
        normal: {
          borderColor: colorPalette[0],
        },
      },
    },

    tooltip: {
      backgroundColor: 'rgba(50,50,50,0.5)',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#008acd',
        },
        crossStyle: {
          color: '#008acd',
        },
        shadowStyle: {
          color: 'rgba(200,200,200,0.2)',
        },
      },
    },

    dataZoom: {
      dataBackgroundColor: '#efefff',
      fillerColor: 'rgba(182,162,222,0.2)',
      handleColor: '#008acd',
    },

    grid: {
      borderColor: '#eee',
    },

    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: '#008acd',
        },
      },
      splitLine: {
        lineStyle: {
          color: ['#eee'],
        },
      },
    },

    valueAxis: {
      axisLine: {
        lineStyle: {
          color: '#008acd',
        },
      },
      splitArea: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: ['#eee'],
        },
      },
    },

    timeline: {
      lineStyle: {
        color: '#008acd',
      },
      controlStyle: {
        normal: { color: '#008acd' },
        emphasis: { color: '#008acd' },
      },
      symbol: 'emptyCircle',
      symbolSize: 3,
    },

    line: {
      smooth: true,
      symbol: 'emptyCircle',
      symbolSize: 3,
    },

    candlestick: {
      itemStyle: {
        normal: {
          color: '#d87a80',
          color0: '#2ec7c9',
          lineStyle: {
            color: '#d87a80',
            color0: '#2ec7c9',
          },
        },
      },
    },

    scatter: {
      symbol: 'circle',
      symbolSize: 4,
    },

    map: {
      label: {
        normal: {
          textStyle: {
            color: '#d87a80',
          },
        },
      },
      itemStyle: {
        normal: {
          borderColor: '#eee',
          areaColor: '#ddd',
        },
        emphasis: {
          areaColor: '#fe994e',
        },
      },
    },

    graph: {
      color: colorPalette,
    },

    gauge: {
      axisLine: {
        lineStyle: {
          color: [
            [0.2, '#2ec7c9'],
            [0.8, '#5ab1ef'],
            [1, '#d87a80'],
          ],
          width: 10,
        },
      },
      axisTick: {
        splitNumber: 10,
        length: 15,
        lineStyle: {
          color: 'auto',
        },
      },
      splitLine: {
        length: 22,
        lineStyle: {
          color: 'auto',
        },
      },
      pointer: {
        width: 5,
      },
    },
  };

  (window as any).echarts.registerTheme(EChartsThemeName, theme);
}

function darkTheme(): void {
  const colorPalette = [
    '#2ec7c9',
    '#b6a2de',
    '#5ab1ef',
    '#ffb980',
    '#d87a80',
    '#8d98b3',
    '#e5cf0d',
    '#97b552',
    '#95706d',
    '#dc69aa',
    '#07a2a4',
    '#9a7fd1',
    '#588dd5',
    '#f5994e',
    '#c05050',
    '#59678c',
    '#c9ab00',
    '#7eb00a',
    '#6f5553',
    '#c14089',
  ];

  const theme = {
    color: colorPalette,

    title: {
      left: 'left',
      textStyle: {
        fontWeight: 'normal',
        color: 'rgba(255, 255, 255, 0.65)',
      },
    },

    visualMap: {
      itemWidth: 15,
      color: ['#5ab1ef', '#e0ffff'],
    },

    toolbox: {
      iconStyle: {
        normal: {
          borderColor: colorPalette[0],
        },
      },
    },

    legend: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.5)',
      },
    },

    tooltip: {
      backgroundColor: 'rgba(50,50,50,0.5)',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#008acd',
        },
        crossStyle: {
          color: '#008acd',
        },
        shadowStyle: {
          color: 'rgba(200,200,200,0.2)',
        },
      },
    },

    dataZoom: {
      dataBackgroundColor: '#efefff',
      fillerColor: 'rgba(182,162,222,0.2)',
      handleColor: '#008acd',
    },

    grid: {
      borderColor: '#434343',
    },

    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: '#008acd',
        },
      },
      splitLine: {
        lineStyle: {
          color: ['#434343'],
        },
      },
    },

    valueAxis: {
      axisLine: {
        lineStyle: {
          color: '#008acd',
        },
      },
      splitArea: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: ['#434343'],
        },
      },
    },

    timeline: {
      lineStyle: {
        color: '#008acd',
      },
      controlStyle: {
        normal: { color: '#008acd' },
        emphasis: { color: '#008acd' },
      },
      symbol: 'emptyCircle',
      symbolSize: 3,
    },

    line: {
      smooth: true,
      symbol: 'emptyCircle',
      symbolSize: 3,
    },

    candlestick: {
      itemStyle: {
        normal: {
          color: '#d87a80',
          color0: '#2ec7c9',
          lineStyle: {
            color: '#d87a80',
            color0: '#2ec7c9',
          },
        },
      },
    },

    scatter: {
      symbol: 'circle',
      symbolSize: 4,
    },

    map: {
      label: {
        normal: {
          textStyle: {
            color: '#d87a80',
          },
        },
      },
      itemStyle: {
        normal: {
          borderColor: '#eee',
          areaColor: '#ddd',
        },
        emphasis: {
          areaColor: '#fe994e',
        },
      },
    },

    graph: {
      color: colorPalette,
    },

    gauge: {
      axisLine: {
        lineStyle: {
          color: [
            [0.2, '#2ec7c9'],
            [0.8, '#5ab1ef'],
            [1, '#d87a80'],
          ],
          width: 10,
        },
      },
      axisTick: {
        splitNumber: 10,
        length: 15,
        lineStyle: {
          color: 'auto',
        },
      },
      splitLine: {
        length: 22,
        lineStyle: {
          color: 'auto',
        },
      },
      pointer: {
        width: 5,
      },
    },
  };

  (window as any).echarts.registerTheme(EChartsThemeName, theme);
}

@Injectable({ providedIn: 'root' })
export class EChartsConfig {
  /**
   * [ECHARTS](https://echarts.apache.org/) libary cdn or local url, Default: `https://cdn.bootcdn.net/ajax/libs/echarts/4.7.0/echarts.min.js`
   *
   * - it will be used first when `"scripts": [ "node_modules/echarts/dist/echarts.min.js" ]` is configured in `angular.json`
   */
  lib: string[] = [`https://cdn.bootcdn.net/ajax/libs/echarts/4.7.0/echarts.min.js`];
  /**
   * Global default options
   */
  defaultOptions?: { [key: string]: any };
  /**
   * The event after the first loading of the echarts library is completed, use this function to extend echarts functionalities.
   * - @param `echarts` equar to `window.echarts`
   */
  echartsLoad?: (echarts: any, theme: string) => void = (_echarts, theme) => EChartsRegisterTheme(theme);
}
