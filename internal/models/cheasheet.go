package models

import (
	"time"
)

type Cheatsheet struct {
	ID          string    `json:"id"`
	Slug        string    `json:"slug"`
	Title       string    `json:"title"`
	Category    string    `json:"category"`
	Subcategory string    `json:"subcategory"`
	ImageUrl    string    `json:"image_url"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type CheatsheetMetadata struct {
	Slug        string `json:"slug" binding:"required"`
	Title       string `json:"title" binding:"required"`
	Category    string `json:"category" binding:"required"`
	SubCategory string `json:"subcategory" binding:"required"`
}
