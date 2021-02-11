package models

import (
	"EX/app/src/database"
	"EX/app/src/libs"
	"errors"

	"gorm.io/gorm"
)

// PDF : PDF file schema
type PDF struct {
	gorm.Model
	UserID     string `json:"userid"`
	FileName   string `json:"filename"`
	FileString string `json:"filestring"`
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
