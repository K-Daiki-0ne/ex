package controllers

import (
	"EX/app/src/libs"
	"EX/app/src/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func UpdateTextController(c *gin.Context) {
	fileID := c.Query("fileID")
	title := c.Query("title")
	comment := c.Query("comment")

	fmt.Println("aaa", title)

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
		return
	}

	models.UpdateTextModel(fileID, title, comment)

	c.JSON(http.StatusOK, gin.H{
		"data": "Update Text table",
	})

}
