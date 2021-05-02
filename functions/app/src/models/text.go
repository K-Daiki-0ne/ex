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
	UserID   string `json:"userid"`
	FileName string `gorm:"gorm:size:50;"`
	File     string `json:"file"`
	Title    string `gorm:"gorm:size:50;"`
	Comment  string `gorm:"gorm:size:255;"`
}

// TextModel : Text file model
func TextModel(id string, filename string, file string, title string, comment string) error {

	db := database.DBConnect

	var Text Text

	// Check required input
	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	Text.UserID = id
	Text.FileName = filename
	Text.File = file
	Text.Title = title
	Text.Comment = comment

	db.Create(&Text)

	return nil
}

// GetTextModel : get data from texts table
func GetTextModel(userID string) []Text {
	db := database.DBConnect
	var text []Text
	db.Find(&text, "user_id = ?", userID)
	return text
}

// GetSingleTextModel ; get single text data from texts table
func GetSingleTextModel(fileID string) Text {
	db := database.DBConnect
	var text Text
	db.Where("id = ?", fileID).First(&text)
	return text

}

// DeleteTextModel : delete single text data from texts table
func DeleteTextModel(userID string, fileID string) string {
	db := database.DBConnect
	db.Debug().Where("id = ?", fileID).Delete(&Text{})
	return "OK"
}

// UpdateTextModel : Update update text data from texts table
func UpdateTextModel(fileID string, title string, comment string) {
	db := database.DBConnect
	db.Debug().Model(&Text{}).Where("id = ?", fileID).Updates(Text{Title: title, Comment: comment})
}
