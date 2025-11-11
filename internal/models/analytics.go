package models

import "time"

type MetricsOverviewResponse struct {
	Period              string            `json:"period"`
	StartDate           time.Time         `json:"start_date"`
	EndDate             time.Time         `json:"end_date"`
	TotalViews          int64             `json:"total_views"`
	TotalUniqueVisitors int64             `json:"total_unique_visitors"`
	Intervals           []MetricsOverview `json:"intervals"`
}

type MetricsOverview struct {
	Date     time.Time `json:"date"`
	Views    int64     `json:"views"`
	Visitors int64     `json:"visitors"`
}

type DeviceStatsResponse struct {
	Period               string       `json:"period"`
	StartDate            time.Time    `json:"start_date"`
	EndDate              time.Time    `json:"end_date"`
	TotalMobileViews     int64        `json:"total_mobile_views"`
	TotalMobileVisitors  int64        `json:"total_mobile_visitors"`
	TotalDesktopViews    int64        `json:"total_desktop_views"`
	TotalDesktopVisitors int64        `json:"total_desktop_visitors"`
	Intervals            []DeviceStat `json:"intervals"`
}

type DeviceStat struct {
	Date            time.Time `json:"date"`
	MobileViews     int64     `json:"mobile_views"`
	MobileVisitors  int64     `json:"mobile_visitors"`
	DesktopViews    int64     `json:"desktop_views"`
	DesktopVisitors int64     `json:"desktop_visitors"`
}

type BrowserStatsResponse struct {
	Period              string     `json:"period"`
	StartDate           time.Time  `json:"start_date"`
	EndDate             time.Time  `json:"end_date"`
	TotalViews          int64      `json:"total_views"`
	TotalUniqueVisitors int64      `json:"total_unique_visitors"`
	Browsers            []DataStat `json:"browsers"`
}

type OperatingSystemStatsResponse struct {
	Period              string     `json:"period"`
	StartDate           time.Time  `json:"start_date"`
	EndDate             time.Time  `json:"end_date"`
	TotalViews          int64      `json:"total_views"`
	TotalUniqueVisitors int64      `json:"total_unique_visitors"`
	OperatingSystems    []DataStat `json:"operating_systems"`
}

type ReferrerStatsResponse struct {
	Period              string     `json:"period"`
	StartDate           time.Time  `json:"start_date"`
	EndDate             time.Time  `json:"end_date"`
	TotalViews          int64      `json:"total_views"`
	TotalUniqueVisitors int64      `json:"total_unique_visitors"`
	Referrers           []DataStat `json:"referrers"`
}

type DataStat struct {
	Name     string `json:"name"`
	Views    int64  `json:"views"`
	Visitors int64  `json:"visitors"`
}
