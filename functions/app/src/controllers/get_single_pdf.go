package controllers

import (
	"EX/app/src/libs"
	"EX/app/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetSinglePDFController(c *gin.Context) {
	fileID := c.Query("fileID")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
	}

	data := models.GetSinglePdfModel(fileID)

	c.JSON(http.StatusOK, gin.H{
		"data": data,
	})
}
