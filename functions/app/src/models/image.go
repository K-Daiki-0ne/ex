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

// ImageModel : Image file model
func ImageModel(id string, filename string, file string) error {

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
