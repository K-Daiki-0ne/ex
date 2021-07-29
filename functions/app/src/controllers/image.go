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

// GetSingleImageController : get image's single file controller
func GetSingleImageController(c *gin.Context) {
	fileID := c.Query("fileID")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
		return
	}

	data := models.GetSingleImageModel(fileID)

	c.JSON(http.StatusOK, gin.H{
		"data": data,
	})
}

// DeleteImageController : delete image's file controller
func DeleteImageController(c *gin.Context) {
	userID := c.Query("userID")
	fileID := c.Query("fileID")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Require fileID",
		})
		return
	}

	suc := models.DeleteImageModel(userID, fileID)

	if suc != "OK" {
		c.JSON(http.StatusBadRequest, "Fatal upload file")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": suc,
	})
}

// UpdateImageController : update image's file controller
func UpdateImageController(c *gin.Context) {
	fileID := c.Query("fileID")
	title := c.Query("title")
	comment := c.Query("comment")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
		return
	}

	models.UpdateImageModel(fileID, title, comment)

	c.JSON(http.StatusOK, gin.H{
		"data": "Update Image table",
	})
}
