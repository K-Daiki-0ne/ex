package controllers

import (
	"EX/app/src/models"
	"encoding/base64"
	"fmt"
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

// ImageController : post image file
func ImageController(c *gin.Context) {
	// Get name query
	userID := c.Query("userID")

	// Get uplaod file title
	title := c.Query("title")

	// Get upload file comment
	comment := c.Query("comment")

	fmt.Println("aaa", comment)

	file, header, err := c.Request.FormFile("file")

	if err != nil {
		log.Panic(err)
		c.String(http.StatusBadRequest, "Bad request")
		return
	}

	defer file.Close()

	data := make([]byte, header.Size)

	file.Read(data)

	// Encode file to string
	filedata := base64.StdEncoding.EncodeToString(data)

	suc := models.PostImageModel(userID, header.Filename, filedata, title, comment)

	if suc != nil {
		fmt.Println(err)
		c.String(http.StatusBadRequest, "Fatal upload file")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "Successfully Uploaded File",
	})
}
