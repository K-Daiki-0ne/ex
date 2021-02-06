package models

import (
	"EX/app/src/libs"
	"errors"

	"gorm.io/gorm"
)

// ImageFileType : image file schema
type ImageFileType struct {
	gorm.Model
	UserID     string `json:"userid"`
	FileName   string `json:"filename"`
	FileString string `json:"filestring"`
}

// Image : Image file model
func Image(id string, filename string, file string) error {

	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	return nil
}
