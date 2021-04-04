package controllers

import (
	"EX/app/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

//
func GetSingleImageController(c *gin.Context) {
	fileID := c.Query("fileID")
	if fileID == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
	}

	data := models.GetSingleImageModel(fileID)

	c.JSON(http.StatusOK, gin.H{
		"data": data,
	})

}
