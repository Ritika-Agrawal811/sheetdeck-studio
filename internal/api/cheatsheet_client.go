package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sheetdeck-studio/internal/models"
	"time"
)

type CheatsheetClient struct {
	baseURL    string
	httpClient *http.Client
}

func NewCheatsheetClient(baseURL string) *CheatsheetClient {
	return &CheatsheetClient{
		baseURL: baseURL,
		httpClient: &http.Client{
			Timeout: 45 * time.Second,
		},
	}
}

func (c *CheatsheetClient) GetAllCheatsheets() ([]models.Cheatsheet, error) {
	// Build the api URL
	url := fmt.Sprintf("%s/cheatsheets", c.baseURL)

	// Make the GET repquest
	resp, err := c.httpClient.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch cheat sheets: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to fetch cheat sheets. server returned status: %d", resp.StatusCode)
	}

	// Decode the JSON response
	var cheatsheets []models.Cheatsheet
	if err := json.NewDecoder(resp.Body).Decode(&cheatsheets); err != nil {
		return nil, fmt.Errorf("failed to decode cheat sheets response: %w", err)
	}

	return cheatsheets, nil
}
