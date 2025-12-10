import { CATEGORIES_INFO, type CategoryKey } from '../constants/categories';

import type { CategoryStat, SubcategoryStat } from '../types/config';
import type { ChartData, AreaChartData } from '../types/chart';
import type { PageviewInterval, DeviceData } from '../types/analytics';
import { DEVICES, type Metric } from '../constants/metrics';

/**
 * Converts category stats to ChartData format
 *
 * @param stats
 * @returns ChartData[]
 */
export const categoryStatsToChartData = (stats: CategoryStat[]): ChartData[] => {
  return stats.map((stat) => ({
    key: CATEGORIES_INFO[stat.category as CategoryKey].title,
    value: stat.totalCount,
    color: CATEGORIES_INFO[stat.category as CategoryKey].color,
  }));
};

/**
 * Converts subcategory stats to ChartData format
 *
 * @param stats
 * @returns ChartData[]
 */
export const subcategoryStatsToChartData = (stats: SubcategoryStat[]): ChartData[] => {
  return stats.map((stat) => ({
    key: stat.subcategory,
    value: stat.count,
    color: '',
  }));
};

/**
 * Converts pageview intervals to AreaChartData format
 *
 * @param stats
 * @returns AreaChartData[]
 */
export const pageviewsStatsToAreaChartData = (stats: PageviewInterval[]): AreaChartData[] => {
  return stats.map((stat) => ({
    key: new Date(stat.date),
    value: stat.views,
  }));
};

/**
 *
 * @param stats
 * @param type
 * @returns
 */
export const devicesStatsToChartData = (stats: DeviceData, type: Metric): ChartData[] => {
  const response = DEVICES.map((item) => {
    const metric = item.keys[type];

    return {
      key: item.type,
      value: metric ? stats[metric] : 0,
      color: item.color,
    };
  });

  return response;
};
