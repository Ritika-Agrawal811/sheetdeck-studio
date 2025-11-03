import { CATEGORIES_INFO, type CategoryKey } from '../constants/categories';

import type { CategoryStat, SubcategoryStat } from '../types/config';
import type { ArcChartData, AreaChartData, ConcentricArcChartData } from '../types/chart';
import type { PageviewInterval, DeviceData } from '../types/analytics';
import { DEVICES, type Metric } from '../constants/metrics';

export const categoryStatsToArcChartData = (stats: CategoryStat[]): ArcChartData[] => {
  return stats.map((stat) => ({
    key: CATEGORIES_INFO[stat.category as CategoryKey].title,
    value: stat.totalCount,
    color: CATEGORIES_INFO[stat.category as CategoryKey].color,
  }));
};

export const subcategoryStatstoArcChartData = (stats: SubcategoryStat[]): ArcChartData[] => {
  return stats.map((stat) => ({
    key: stat.subcategory,
    value: stat.count,
    color: '',
  }));
};

export const pageviewsStatstoAreaChartData = (stats: PageviewInterval[]): AreaChartData[] => {
  return stats.map((stat) => ({
    key: new Date(stat.date),
    value: stat.views,
  }));
};

export const devicesStatsToConcentricArcChartData = (stats: DeviceData, type: Metric): ConcentricArcChartData[] => {
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
