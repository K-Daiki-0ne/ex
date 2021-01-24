package controllers

import (
	"fmt"
	"io/ioutil"
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

	// output filename for log
	fmt.Printf("Uploaded File: %+v\n", header.Filename)

	// output file size for log
	fmt.Printf("File Size: %+v\n", header.Size)

	fmt.Printf("MIME Header: %+v\n", header.Header)

	// Upload file name in local enviroment
	fileName := "*" + "-" + id + "-" + header.Filename

	// Create a temporary file within our temp-images directory that follows
	// a particular naming pattern
	tempFile, err := ioutil.TempFile("text", fileName)

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

	// write this byte array to our temporary file
	tempFile.Write(fileBytes)

	c.JSON(http.StatusOK, gin.H{
		"status": "Successfully Uploaded File",
	})

}
