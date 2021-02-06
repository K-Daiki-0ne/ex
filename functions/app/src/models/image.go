package models

import (
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

	// If userID doesn't exit
	if id == "" {
		return errors.New("require userID")
	}

	// If filename doens't exit
	if filename == "" {
		return errors.New("require Filename")
	}

	// If file doesn't exit
	if file == "" {
		return errors.New("require File")
	}

	return nil
}
