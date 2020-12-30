package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Post fsdafs
type Post struct {
	Title       string
	Author      string
	Description string
}

// Image : post image file
func Image(c *gin.Context) {
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
