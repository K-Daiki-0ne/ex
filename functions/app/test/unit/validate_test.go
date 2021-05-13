package test

import (
	"EX/app/src/libs"
	"testing"
)

const (
	userID      = "test"
	fileID      = "test"
	file        = "test"
	errorUserID = ""
	errorfileID = ""
	errorfile   = ""
)

func TestValidate(t *testing.T) {
	err := libs.Validate(userID, fileID, file)

	if err == nil {
		t.Log("All validate ...OK")
	} else {
		t.Error("All validate ...NO")
	}
}

func TestErrorValidate(t *testing.T) {
	userIDValidateError := libs.Validate(errorUserID, fileID, file)
	fileIDValidateError := libs.Validate(userID, errorfileID, file)
	fileValidateError := libs.Validate(userID, fileID, errorfile)

	if userIDValidateError != nil {
		t.Log("Error UserID validate ...OK")
	} else {
		t.Error("Error UserID validate ...NO")
	}

	if fileIDValidateError != nil {
		t.Log("Error fileID validate ...OK")
	} else {
		t.Error("Error fileID validate ...NO")
	}

	if fileValidateError != nil {
		t.Log("Error file validate ...OK")
	} else {
		t.Error("Error file validate ...NO")
	}
}

func TestFileIDValidate(t *testing.T) {
	suc := libs.FileIDValidate(fileID)

	if suc == nil {
		t.Log("fileID validate ...OK")
	} else {
		t.Error("fileID validate ...NO")
	}
}

func TestErrorFileIDValidate(t *testing.T) {
	err := libs.FileIDValidate(errorfileID)

	if err != nil {
		t.Log("Error fileID validate ...OK")
	} else {
		t.Error("Error fileID validate ...NO")
	}
}

func TestUserIDValidate(t *testing.T) {
	suc := libs.UserIDValidate(userID)

	if suc == nil {
		t.Log("UserID validate ...OK")
	} else {
		t.Error("UserID validate ...NO")
	}
}

func TestErrorUserIDValidate(t *testing.T) {
	err := libs.UserIDValidate(errorUserID)

	if err != nil {
		t.Log("Error UserID validate ..OK")
	} else {
		t.Error("Error UserID validate ...NO")
	}
}
