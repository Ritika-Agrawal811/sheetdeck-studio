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
