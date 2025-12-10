export type CheatsheetMetadata = {
  slug: string;
  title: string;
  category: string;
  subcategory: string;
};

export type Cheatsheet = CheatsheetMetadata & {
  id: string;
  imageUrl: string;
  imageSize: number;
  createdAt: string;
  updatedAt: string;
  downloads: number;
  views: number;
};

export type SortFilters = 'recent' | 'oldest' | 'most_viewed' | 'least_viewed' | 'most_downloaded' | 'least_downloaded';
