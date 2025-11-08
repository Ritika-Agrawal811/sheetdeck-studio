package main

import (
	"context"
	"fmt"
	"runtime"
	"sheetdeck-studio/internal/api"
	"sheetdeck-studio/internal/models"

	"github.com/ansxuman/go-touchid"
)

// App struct
type App struct {
	ctx              context.Context
	cheatsheetClient *api.CheatsheetClient
	configClient     *api.ConfigClent
	analyticsClient  *api.AnalyticsClient
	baseURL          string
	isMacOS          bool
}

// NewApp creates a new App application struct
func NewApp(baseURL string) *App {
	return &App{
		baseURL:          baseURL,
		cheatsheetClient: api.NewCheatsheetClient(baseURL),
		configClient:     api.NewConfigClient(baseURL),
		analyticsClient:  api.NewAnalyticsClient(baseURL),
		isMacOS:          runtime.GOOS == "darwin",
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) IsMacOS() bool {
	return a.isMacOS
}

func (a *App) AuthenticateWithTouchID() (bool, error) {
	// Only works on macOS
	if runtime.GOOS != "darwin" {
		return false, fmt.Errorf("touch ID only available on macOS")
	}

	success, err := touchid.Auth(touchid.DeviceTypeBiometrics, "Verify Identity")
	if err == nil && success {
		fmt.Println("auth complete")
		return true, nil
	}
	return false, err
}

/* ---- Cheatsheet APIs ---- */

func (a *App) GetCheatSheets(category string, subcategory string) ([]models.Cheatsheet, error) {
	return a.cheatsheetClient.GetCheatsheets(category, subcategory)
}

func (a *App) UploadCheatsheet(slug, title, category, subcategory string, image []byte) error {
	metdata := models.CheatsheetMetadata{
		Slug:        slug,
		Title:       title,
		Category:    category,
		SubCategory: subcategory,
	}

	return a.cheatsheetClient.UploadCheatsheet(metdata, image)
}

/* ---- Analytics APIs ---- */
func (a *App) GetPageviewStats(period string) (*models.PageviewStatsResponse, error) {
	return a.analyticsClient.GetPageviewsStats(period)
}

func (a *App) GetDevicesStats(period string) (*models.DeviceStatsResponse, error) {
	return a.analyticsClient.GetDevicesStats(period)
}

/* ---- Config APIs ---- */
func (a *App) GetConfig() (*models.ConfigResponse, error) {
	return a.configClient.GetConfig()
}

func (a *App) GetStorageUsage() (*models.UsageResponse, error) {
	return a.configClient.GetStorageUsage()
}

func (a *App) GetBrowsersStats(period string) (*models.BrowserStatsResponse, error) {
	return a.analyticsClient.GetBrowsersStats(period)
}
