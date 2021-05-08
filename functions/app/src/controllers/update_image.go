package controllers

import (
	"EX/app/src/libs"
	"EX/app/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// UpdateImageController : update image's file controller
func UpdateImageController(c *gin.Context) {
	fileID := c.Query("fileID")
	title := c.Query("title")
	comment := c.Query("comment")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
		return
	}

	models.UpdateImageModel(fileID, title, comment)

	c.JSON(http.StatusOK, gin.H{
		"data": "Update Image table",
	})

}
