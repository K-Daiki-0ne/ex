package controllers

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Pdf : post pdf file
func Pdf(c *gin.Context) {
	// Get name query
	id := c.Query("userID")

	file, header, err := c.Request.FormFile("file")
	if err != nil {
		log.Panic(err)
		c.String(http.StatusBadRequest, "Bad request")
	}

	defer file.Close()

	// Upload file name in local enviroment
	fileName := "*" + "-" + id + "-" + header.Filename

	// Create a temporary file within our temp-images directory that follows
	// a particular naming pattern
	tempFile, err := ioutil.TempFile("pdf", fileName)

	if err != nil {
		// output error log
		log.Panic(err)
	}

	defer tempFile.Close()

	// read all of the contents of our uploaded file into a
	// byte array
	fileBytes, err := ioutil.ReadAll(file)

	if err != nil {
		fmt.Println(err)
		c.String(http.StatusBadRequest, "Fatal upload file")
	}

	fmt.Println("file:", fileBytes)

	// write this byte array to our temporary file
	tempFile.Write(fileBytes)

	c.JSON(http.StatusOK, gin.H{
		"status": "Successfully Uploaded File",
	})
}
