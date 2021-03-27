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
	FileName string `json:"filename"`
	File     string `json:"file"`
	Title    string `json:"title"`
	Comment  string `json:"comment"`
}

// PDFModel : Image file model
func PDFModel(id string, filename string, file string) error {

	db := database.DBConnect

	var PDF PDF

	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	PDF.UserID = id
	PDF.FileName = filename
	PDF.FileString = file

	db.Create(&PDF)

	return nil
}

// GetPdfModel : get data from pdfs table
func GetPdfModel(userID string) []PDF {
	db := database.DBConnect
	var pdf []PDF
	db.First(&pdf, "user_id = ?", userID)
	return pdf
}
