package models

import (
	"EX/app/src/database"
	"EX/app/src/libs"
	"errors"

	"gorm.io/gorm"
)

// Text : Text file schema
type Text struct {
	gorm.Model
	UserID     string `json:"userid"`
	FileName   string `json:"filename"`
	FileString string `json:"filestring"`
}

// TextModel : Text file model
func TextModel(id string, filename string, file string) error {

	db := database.DBConnect

	var Text Text

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

// GetTextModel : get data from images table
func GetTextModel(userID string) []Text {
	db := database.DBConnect
	var text []Text
	db.First(&text, "user_id = ?", userID)
	return text
}