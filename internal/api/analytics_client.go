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
 * Get page view stats by period - 24h, 7d, 30d, 3m etc
 * @return *models.PageviewStatsResponse, error
 */
func (c *AnalyticsClient) GetPageviewsStats(period string) (*models.PageviewStatsResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/analytics/pageviews?period=%s", c.baseURL, period)

	// Make the GET response
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("faield to fetch page views stats: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to page views stats. server returned status: %d", resp.StatusCode)
	}

	var stats *models.PageviewStatsResponse
	if err := json.NewDecoder(resp.Body).Decode(&stats); err != nil {
		return nil, fmt.Errorf("failed to decode oage views stats response: %w", err)
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
