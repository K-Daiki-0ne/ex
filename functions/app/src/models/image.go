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
	FileName string `gorm:"gorm:size:50;"`
	File     string `json:"file"`
	Title    string `gorm"gorm:size:50;"`
	Comment  string `gorm:"gorm:size:255;"`
}

// PostImageModel : Image file model
func PostImageModel(id string, filename string, file string, title string, comment string) error {

	db := database.DBConnect

	var Image Image

	err := libs.Validate(id, filename, file)

	if err != nil {
		return errors.New("Failed upload file")
	}

	Image.UserID = id
	Image.FileName = filename
	Image.File = file
	Image.Title = title
	Image.Comment = comment

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

// GetSingleImageModel : get single image data from images table
func GetSingleImageModel(fileID string) Image {
	db := database.DBConnect
	var image Image
	db.Debug().Where("id = ?", fileID).Find(&image)
	return image
}

// DeleteImageModel : delete iamge data from images table
func DeleteImageModel(userID string, fileID string) string {
	db := database.DBConnect
	db.Debug().Where("id = ?", fileID).Delete(&Image{})
	return "OK"
}

// UpdateImageModel : Update update image data from images table
func UpdateImageModel(fileID string, title string, comment string) {
	db := database.DBConnect
	db.Debug().Model(&Image{}).Where("id = ?", fileID).Updates(Image{Title: title, Comment: comment})
}
