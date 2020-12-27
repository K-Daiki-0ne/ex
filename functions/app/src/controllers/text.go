package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Text : post text file
func Text(c *gin.Context) {
	file, header, err := c.Request.FormFile("file")

	log.Println(file)

	if err != nil {
		c.String(http.StatusBadRequest, "Bad request")
		return
	}
	fileName := header.Filename

	log.Println(fileName)

	// Not exit File
	if len(fileName) == 0 {
		c.JSON(http.StatusBadRequest, "File doesn't exit")
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
	})
}
