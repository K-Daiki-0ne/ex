package controllers

import (
	"EX/app/src/libs"
	"EX/app/src/models"

	"net/http"

	"github.com/gin-gonic/gin"
)

func DeleteTextController(c *gin.Context) {
	userId := c.Query("userID")
	fileId := c.Query("fileID")

	err := libs.DeleteValidate(userId)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Require userID",
		})
	}

	suc := models.DeleteTextModel(userId, fileId)

	if suc != "OK" {
		c.JSON(http.StatusBadRequest, "Fatal upload file")
	}

	c.JSON(http.StatusOK, gin.H{
		"data": suc,
	})
}
