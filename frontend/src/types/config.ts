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

export type StorageDetails = {
  database: Usage & Tables;
  storage: Usage & Files;
  timestamp: string;
};

type Usage = {
  sizeBytes: number;
  sizePretty: string;
  limitBytes: number;
  limitPretty: string;
  usagePercent: number;
};

type Tables = {
  tables: TableData[];
};

type TableData = {
  schemaName: string;
  tableName: string;
  size: string;
};

type Files = {
  files: FileData[];
};

type FileData = {
  title: string;
  category: string;
  size: string;
};
