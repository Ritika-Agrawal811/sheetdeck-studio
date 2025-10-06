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
	baseURL          string
	isMacOS          bool
}

// NewApp creates a new App application struct
func NewApp(baseURL string) *App {
	return &App{
		baseURL:          baseURL,
		cheatsheetClient: api.NewCheatsheetClient(baseURL),
		configClient:     api.NewConfigClient(baseURL),
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

// GetAllCheatSheets retrieves all cheat sheets from the backend
func (a *App) GetAllCheatSheets() ([]models.Cheatsheet, error) {
	return a.cheatsheetClient.GetAllCheatsheets()
}

func (a *App) GetConfig() (*models.ConfigResponse, error) {
	return a.configClient.GetConfig()
}
