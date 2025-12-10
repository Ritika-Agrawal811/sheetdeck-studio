package models

import (
	"github.com/jackc/pgx/v5/pgtype"
)

type CheatsheetResponse struct {
	Data []Cheatsheet `json:"cheatsheets"`
}

type Cheatsheet struct {
	ID          pgtype.UUID        `json:"id"`
	Slug        string             `json:"slug"`
	Title       string             `json:"title"`
	Category    string             `json:"category"`
	Subcategory string             `json:"subcategory"`
	ImageUrl    pgtype.Text        `json:"image_url"`
	ImageSize   pgtype.Int8        `json:"image_size"`
	CreatedAt   pgtype.Timestamptz `json:"created_at"`
	UpdatedAt   pgtype.Timestamptz `json:"updated_at"`
	Downloads   int64              `json:"downloads"`
	Views       int64              `json:"views"`
}

type CheatsheetMetadata struct {
	Slug        string `json:"slug" binding:"required"`
	Title       string `json:"title" binding:"required"`
	Category    string `json:"category" binding:"required"`
	SubCategory string `json:"subcategory" binding:"required"`
}

type CheatsheetsConfig struct {
	Category    string
	Subcategory string
	Sort        string
	Limit       int
}
