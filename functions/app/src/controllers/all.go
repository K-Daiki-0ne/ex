package controllers

import (
	"EX/app/src/libs"
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
	UserID   string `json:"userid"`
	FileName string `json:"filename"`
	File     string `json:"file"`
}

// AllController : get all user's all file
func AllController(c *gin.Context) {
	userID := c.Query("userID")

	err := libs.UserIDValidate(userID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Require userID",
		})
		return
	}

	images := models.GetImageModel(userID)
	texts := models.GetTextModel(userID)
	pdfs := models.GetPdfModel(userID)

	c.JSON(http.StatusOK, gin.H{
		"image": images,
		"text":  texts,
		"pdf":   pdfs,
	})

}
