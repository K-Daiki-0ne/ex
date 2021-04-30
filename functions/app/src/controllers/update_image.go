package controllers

import (
	"EX/app/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UpdateImageController(c *gin.Context) {
	fileID := c.Query("fileID")
	title := c.Query("Title")
	comment := c.Query("Comment")

	if fileID == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
	}

	models.UpdateImageModel(fileID, title, comment)

	c.JSON(http.StatusOK, gin.H{
		"data": "Update Image table",
	})

}
