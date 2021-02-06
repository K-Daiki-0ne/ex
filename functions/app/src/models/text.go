package models

import (
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
