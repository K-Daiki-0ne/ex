package controllers

import (
	"EX/app/src/libs"
	"EX/app/src/models"

	"net/http"

	"github.com/gin-gonic/gin"
)

// DeleteImageController : delete image's file controller
func DeleteImageController(c *gin.Context) {
	userId := c.Query("userID")
	fileId := c.Query("fileID")

	err := libs.FileIDValidate(fileId)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Require fileID",
		})
	}

	suc := models.DeleteImageModel(userId, fileId)

	if suc != "OK" {
		c.JSON(http.StatusBadRequest, "Fatal upload file")
	}

	c.JSON(http.StatusOK, gin.H{
		"data": suc,
	})
}
