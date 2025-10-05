package models

type ConfigResponse struct {
	Categories    []string       `json:"categories"`
	Subcategories []string       `json:"subcategories"`
	CategoryStats []CategoryStat `json:"category_stats"`
	Stats         GlobalStats    `json:"stats"`
}

type CategoryStat struct {
	Category           string            `json:"category"`
	TotalCount         int64             `json:"total_count"`
	Subcategories      []string          `json:"subcategories"`
	SubcategoriesStats []SubcategoryStat `json:"subcategories_stats"`
}

type SubcategoryStat struct {
	Subcategory string `json:"subcategory"`
	Count       int64  `json:"count"`
}

type GlobalStats struct {
	TotalCheatsheets    int64 `json:"total_cheatsheets"`
	TotalViews          int64 `json:"total_views"`
	TotalUniqueVisitors int64 `json:"total_unique_visitors"`
	TotalClicks         int64 `json:"total_clicks"`
	TotalDownloads      int64 `json:"total_downloads"`
}
