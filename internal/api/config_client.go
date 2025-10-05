package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sheetdeck-studio/internal/models"
	"time"
)

type ConfigClent struct {
	baseURL    string
	httpClient *http.Client
}

func NewConfigClient(baseURL string) *ConfigClent {
	return &ConfigClent{
		baseURL: baseURL,
		httpClient: &http.Client{
			Timeout: 45 * time.Second,
		},
	}

}

func (c *ConfigClent) GetConfig() (*models.ConfigResponse, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/config", c.baseURL)

	// Make the GET request
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch config for backend: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to fetch config. server returned status: %d", resp.StatusCode)
	}

	// Decode the JSON response
	var config *models.ConfigResponse
	if err := json.NewDecoder(resp.Body).Decode(&config); err != nil {
		return nil, fmt.Errorf("failed to decode the config response: %w", err)
	}

	return config, nil
}
