import { CATEGORIES_INFO, type CategoryKey } from '../constants/categories';

import type { CategoryStat, SubcategoryStat } from '../types/config';
import type { ArcChartData } from '../types/chart';

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
