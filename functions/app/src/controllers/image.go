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
	file, header, err := c.Request.FormFile("image")

	log.Println(file)

	if err != nil {
		c.String(http.StatusBadRequest, "Bad request")
		return
	}
	fileName := header.Filename

	log.Println(fileName)

	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
	})

}
