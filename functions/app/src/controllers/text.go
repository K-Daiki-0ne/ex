package controllers

import (
	"EX/app/src/models"
	"encoding/base64"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Text : post text file
func Text(c *gin.Context) {
	// Get name query
	id := c.Query("userID")

	file, header, err := c.Request.FormFile("file")
	if err != nil {
		log.Panic(err)
		c.String(http.StatusBadRequest, "Bad request")
	}

	defer file.Close()

	data := make([]byte, header.Size)

	file.Read(data)

	// Encode file to string
	filedata := base64.StdEncoding.EncodeToString(data)

	suc := models.TextModel(id, header.Filename, filedata)

	if suc != nil {
		fmt.Println(err)
		c.String(http.StatusBadRequest, "Fatal upload file")
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "Successfully Uploaded File",
	})

}
