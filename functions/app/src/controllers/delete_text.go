package controllers

import (
	"EX/app/src/libs"
	"EX/app/src/models"

	"net/http"

	"github.com/gin-gonic/gin"
)

// DeleteTextController : delete text's file controller
func DeleteTextController(c *gin.Context) {
	userID := c.Query("userID")
	fileID := c.Query("fileID")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Require fileID",
		})
		return
	}

	suc := models.DeleteTextModel(userID, fileID)

	if suc != "OK" {
		c.JSON(http.StatusBadRequest, "Fatal upload file")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": suc,
	})
}
