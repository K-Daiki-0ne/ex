package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DeleteTextController(c *gin.Context) {
	userId := c.Query("userID")
	fileId := c.Query("fileID")

	suc := models.DeleteTextModel(userId, fileId)

	if suc != "OK" {
		c.JSON(http.StatusBadRequest, "Fatal upload file")
	}

	c.JSON(http.StatusOK, gin.H{
		"data": suc,
	})
}
