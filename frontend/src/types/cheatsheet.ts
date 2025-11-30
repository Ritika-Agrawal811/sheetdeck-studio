export type CheatsheetMetadata = {
  slug: string;
  title: string;
  category: string;
  subcategory: string;
};

export type Cheatsheet = {
  id: string;
  slug: string;
  title: string;
  category: string;
  subcategory: string;
  imageUrl: string;
  imageSize: number;
  createdAt: string;
  updatedAt: string;
};

export interface CheatsheetFilters {
  category?: string;
  subCategory?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: 'title' | 'views' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}
