package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sheetdeck-studio/internal/models"
	"time"
)

type AnalyticsClient struct {
	baseURL    string
	httpClient *http.Client
}

func NewAnalyticsClient(baseURL string) *AnalyticsClient {
	return &AnalyticsClient{
		baseURL: baseURL,
		httpClient: &http.Client{
			Timeout: 45 * time.Second,
		},
	}
}

/**
 * Get metrics overview by period - 24h, 7d, 30d, 3m etc
 * @return *models.PageviewStatsResponse, error
 */
func (c *AnalyticsClient) GetMetricsOverview(period string) (*models.MetricsOverviewResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/analytics/overview?period=%s", c.baseURL, period)

	// Make the GET response
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("faield to fetch metrics overview: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to metrics overview. server returned status: %d", resp.StatusCode)
	}

	var stats *models.MetricsOverviewResponse
	if err := json.NewDecoder(resp.Body).Decode(&stats); err != nil {
		return nil, fmt.Errorf("failed to decode metrics overview response: %w", err)
	}

	return stats, nil
}

/**
 * Get devices stats by period - 24h, 7d, 30d, 3m etc
 * @return *models.DeviceStatsResponse, error
 */
func (c *AnalyticsClient) GetDevicesStats(period string) (*models.DeviceStatsResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/analytics/summary/devices?period=%s", c.baseURL, period)

	// Make the GET response
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("faield to fetch devices stats: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to devices stats. server returned status: %d", resp.StatusCode)
	}

	var stats *models.DeviceStatsResponse
	if err := json.NewDecoder(resp.Body).Decode(&stats); err != nil {
		return nil, fmt.Errorf("failed to decode devices stats response: %w", err)
	}

	return stats, nil
}

/**
 * Get browsers stats by period - 24h, 7d, 30d, 3m etc
 * @return *models.BrowserStatsResponse, error
 */
func (c *AnalyticsClient) GetBrowsersStats(period string) (*models.BrowserStatsResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/analytics/summary/browsers?period=%s", c.baseURL, period)

	// Make the GET response
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("faield to fetch browsers stats: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to browsers stats. server returned status: %d", resp.StatusCode)
	}

	var stats *models.BrowserStatsResponse
	if err := json.NewDecoder(resp.Body).Decode(&stats); err != nil {
		return nil, fmt.Errorf("failed to decode browsers stats response: %w", err)
	}

	return stats, nil
}

/**
 * Get operating systems stats by period - 24h, 7d, 30d, 3m etc
 * @return *models.OperatingSystemStatsResponse, error
 */
func (c *AnalyticsClient) GetOperatingSystemStats(period string) (*models.OperatingSystemStatsResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/analytics/summary/os?period=%s", c.baseURL, period)

	// Make the GET response
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("faield to fetch operating systems stats: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to operating systems stats. server returned status: %d", resp.StatusCode)
	}

	var stats *models.OperatingSystemStatsResponse
	if err := json.NewDecoder(resp.Body).Decode(&stats); err != nil {
		return nil, fmt.Errorf("failed to decode operating systems stats response: %w", err)
	}

	return stats, nil
}

/**
 * Get referrers stats by period - 24h, 7d, 30d, 3m etc
 * @return *models.ReferrerStatsResponse, error
 */
func (c *AnalyticsClient) GetReferrersStats(period string) (*models.ReferrerStatsResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/analytics/summary/referrers?period=%s", c.baseURL, period)

	// Make the GET response
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("faield to fetch referrers stats: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to referrers stats. server returned status: %d", resp.StatusCode)
	}

	var stats *models.ReferrerStatsResponse
	if err := json.NewDecoder(resp.Body).Decode(&stats); err != nil {
		return nil, fmt.Errorf("failed to decode referrers stats response: %w", err)
	}

	return stats, nil
}

/**
 * Get routes stats by period - 24h, 7d, 30d, 3m etc
 * @return *models.RoutesStatsResponse, error
 */
func (c *AnalyticsClient) GetRoutesStats(period string) (*models.RoutesStatsResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/analytics/summary/routes?period=%s", c.baseURL, period)

	// Make the GET response
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("faield to fetch routes stats: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to routes stats. server returned status: %d", resp.StatusCode)
	}

	var stats *models.RoutesStatsResponse
	if err := json.NewDecoder(resp.Body).Decode(&stats); err != nil {
		return nil, fmt.Errorf("failed to decode routes stats response: %w", err)
	}

	return stats, nil
}
