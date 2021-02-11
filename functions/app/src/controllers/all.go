package controllers

import (
	"EX/app/src/database"
	"EX/app/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// Image : image file schema
type Image struct {
	gorm.Model
	UserID   string `json:"userid"`
	FileName string `json:"filename"`
	File     string `json:"file"`
}

// Text : Text file schema
type Text struct {
	gorm.Model
	UserID   string `json:"userid"`
	FileName string `json:"filename"`
	File     string `json:"file"`
}

// PDF : PDF file schema
type PDF struct {
	gorm.Model
	UserID     string `json:"userid"`
	FileName   string `json:"filename"`
	FileString string `json:"filestring"`
}

// AllController : get all user's all file
func AllController(c *gin.Context) {

	db := database.DBConnect

	id := c.Query("userID")

	var text []Text
	var pdf []PDF

	/*
	 *  Get user's post all file from AWS's S3
	 *  response type Array
	 */

	images := models.GetImageModel(id)
	db.First(&text, "user_id = ?", id)
	db.First(&pdf, "user_id = ?", id)

	c.JSON(http.StatusOK, gin.H{
		"image": images,
		"text":  text,
		"pdf":   pdf,
	})

}
