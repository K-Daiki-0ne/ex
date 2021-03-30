package controllers

import (
	"EX/app/src/models"
	"encoding/base64"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// PdfController : post pdf file
func PdfController(c *gin.Context) {
	// Get name query
	id := c.Query("userID")

	// Get uplaod file title
	title := c.Query("title")

	// Get upload file comment
	comment := c.Query("comment")

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

	suc := models.PDFModel(id, header.Filename, filedata, title, comment)

	if suc != nil {
		fmt.Println(err)
		c.String(http.StatusBadRequest, "Fatal upload file")
	}
	c.JSON(http.StatusOK, gin.H{
		"status": "Successfully Uploaded File",
	})
}
