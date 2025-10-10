export type ConfigResponse = {
  categories: string[];
  subcategories: string[];
  categoryStats: CategoryStat[];
  stats: GlobalStats;
};

export type CategoryStat = {
  category: string;
  totalCount: number;
  subcategories: string[];
  subcategoriesStats: SubcategoryStat[];
};

export type SubcategoryStat = {
  subcategory: string;
  count: number;
};

export type GlobalStats = {
  totalCheatsheets: number;
  totalViews: number;
  totalUniqueVisitors: number;
  totalClicks: number;
  totalDownloads: number;
};
