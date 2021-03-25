package models

import (
	"EX/app/src/database"
	"EX/app/src/libs"
	"errors"

	"gorm.io/gorm"
)

// Image : image file schema
type Image struct {
	gorm.Model
	UserID   string `json:"userid"`
	FileName string `json:"filename"`
	File     string `json:"file"`
}

// PostImageModel : Image file model
func PostImageModel(id string, filename string, file string) error {

	db := database.DBConnect

	var Image Image

	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	Image.UserID = id
	Image.FileName = filename
	Image.File = file

	db.Create(&Image)

	return nil

}

// GetImageModel : get data from images table
func GetImageModel(userID string) []Image {
	db := database.DBConnect
	var image []Image
	db.Find(&image, "user_id = ?", userID)
	return image
}
