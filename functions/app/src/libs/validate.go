package libs

import "errors"

// Validate : file upload validate function
func Validate(userID string, fileName string, file string) error {

	if userID == "" {
		return errors.New("require UserID")
	}

	if fileName == "" {
		return errors.New("require FileName")
	}

	if file == "" {
		return errors.New("require File")
	}

	return nil

}

func FileIDValidate(fileID string) error {
	if fileID == "" {
		return errors.New("require file")
	}

	return nil
}
