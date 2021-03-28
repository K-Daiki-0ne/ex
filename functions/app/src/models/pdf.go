package models

import (
	"EX/app/src/database"
	"EX/app/src/libs"
	"errors"

	"gorm.io/gorm"
)

// PDF : PDF file schema
type Pdf struct {
	gorm.Model
	UserID   string `json:"userid"`
	FileName string `json:"gorm:size:50"`
	File     string `json:"file"`
	Title    string `json:"gorm:size:50"`
	Comment  string `json:"gorm:size:255"`
}

// PDFModel : Image file model
func PDFModel(id string, filename string, file string, title string, comment string) error {

	db := database.DBConnect

	var PDF Pdf

	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	PDF.UserID = id
	PDF.FileName = filename
	PDF.File = file
	PDF.Title = title
	PDF.Comment = comment

	db.Create(&PDF)

	return nil
}

// GetPdfModel : get data from pdfs table
func GetPdfModel(userID string) []Pdf {
	db := database.DBConnect
	var pdf []Pdf
	db.First(&pdf, "user_id = ?", userID)
	return pdf
}
