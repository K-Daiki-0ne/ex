package models

import (
	"EX/app/src/libs"
	"errors"

	"gorm.io/gorm"
)

// PDFFileType : PDF file schema
type PDFFileType struct {
	gorm.Model
	UserID     string `json:"userid"`
	FileName   string `json:"filename"`
	FileString string `json:"filestring"`
}

// PDF : Image file model
func PDF(id string, filename string, file string) error {

	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	return nil
}
