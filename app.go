package main

import (
	"context"
	"fmt"
	"sheetdeck-studio/internal/api"
	"sheetdeck-studio/internal/models"
)

// App struct
type App struct {
	ctx              context.Context
	cheatsheetClient *api.CheatsheetClient
	configClient     *api.ConfigClent
	baseURL          string
}

// NewApp creates a new App application struct
func NewApp(baseURL string) *App {
	return &App{
		baseURL: baseURL,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	a.cheatsheetClient = api.NewCheatsheetClient(a.baseURL)
	a.configClient = api.NewConfigClient(a.baseURL)
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// GetAllCheatSheets retrieves all cheat sheets from the backend
func (a *App) GetAllCheatSheets() ([]models.Cheatsheet, error) {
	return a.cheatsheetClient.GetAllCheatsheets()
}

func (a *App) GetConfig() (*models.ConfigResponse, error) {
	return a.configClient.GetConfig()
}
