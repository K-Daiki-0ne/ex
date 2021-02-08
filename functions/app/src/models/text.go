package models

import (
	"EX/app/src/database"
	"EX/app/src/libs"
	"errors"

	"gorm.io/gorm"
)

// TextFileType : Text file schema
type TextFileType struct {
	gorm.Model
	UserID     string `json:"userid"`
	FileName   string `json:"filename"`
	FileString string `json:"filestring"`
}

// Text : Text file model
func Text(id string, filename string, file string) error {

	db := database.DBConnect

	var Text TextFileType

	// Check required input
	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	Text.UserID = id
	Text.FileName = filename
	Text.FileString = file

	db.Create(&Text)

	return nil
}
