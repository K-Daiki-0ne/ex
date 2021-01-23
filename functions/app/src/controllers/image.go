package controllers

import (
	"io"
	"log"
	"net/http"
	"os"

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
	if err != nil {
		log.Panic(err)
		c.String(http.StatusBadRequest, "Bad request")
		return
	}
	fileName := header.Filename
	dir, _ := os.Getwd()
	out, err := os.Create(dir + "\\images\\" + fileName)
	if err != nil {
		log.Fatal(err)
	}
	defer out.Close()
	_, err = io.Copy(out, file)
	if err != nil {
		log.Fatal(err)
	}
	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
	})

}
