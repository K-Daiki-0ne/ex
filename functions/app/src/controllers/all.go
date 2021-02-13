package controllers

import (
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
	id := c.Query("userID")

	images := models.GetImageModel(id)
	texts := models.GetTextModel(id)
	pdfs := models.GetPdfModel(id)

	c.JSON(http.StatusOK, gin.H{
		"image": images,
		"text":  texts,
		"pdf":   pdfs,
	})

}
