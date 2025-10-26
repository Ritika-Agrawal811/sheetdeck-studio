package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"mime/multipart"
	"net/http"
	"net/textproto"
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

/**
 * Get all cheat sheets
 * @return []models.Cheatsheet, error
 */
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

/**
 * Upload a cheatsheet to database
 * @param metadata models.CheatsheetMetadata
 * @param image string
 * @return error
 */
func (c *CheatsheetClient) UploadCheatsheet(metadata models.CheatsheetMetadata, image []byte) error {
	// Build the api URL
	url := fmt.Sprintf("%s/cheatsheets", c.baseURL)

	/* ---- Create multipart form ---- */
	var body bytes.Buffer
	writer := multipart.NewWriter(&body)

	// Add metadata as JSON string
	metadataJSON, err := json.Marshal(metadata)
	if err != nil {
		return fmt.Errorf("failed to marshal metadata: %w", err)
	}

	if err := writer.WriteField("metadata", string(metadataJSON)); err != nil {
		return fmt.Errorf("failed to write metadata field: %w", err)
	}

	// Add image to the form data
	h := make(textproto.MIMEHeader)
	h.Set("Content-Disposition", `form-data; name="cheatsheet_image"; filename="cheatsheet.webp"`)
	h.Set("Content-Type", "image/webp")

	part, err := writer.CreatePart(h)
	if err != nil {
		return fmt.Errorf("failed to create form file: %w", err)
	}

	if _, err := part.Write(image); err != nil {
		return fmt.Errorf("failed to copy file content: %w", err)
	}
	writer.Close()

	// Make the POST request
	resp, err := c.httpClient.Post(url, writer.FormDataContentType(), &body)
	if err != nil {
		return fmt.Errorf("failed to upload cheat sheet: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		return fmt.Errorf("failed to upload cheat sheet. server returned status: %d", resp.StatusCode)
	}

	return nil
}
