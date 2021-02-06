package models

import (
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

	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	return nil
}
