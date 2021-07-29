package controllers

import (
	"EX/app/src/models"
	"encoding/base64"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// TextController : post text file
func TextController(c *gin.Context) {
	// Get name query
	userID := c.Query("userID")

	// Get uplaod file title
	title := c.Query("title")

	// Get upload file comment
	comment := c.Query("comment")

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

	suc := models.TextModel(userID, header.Filename, filedata, title, comment)

	if suc != nil {
		fmt.Println(err)
		c.String(http.StatusBadRequest, "Fatal upload file")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "Successfully Uploaded File",
	})
}

// GetSingleTextController : get text's single file controller
func GetSingleTextController(c *gin.Context) {
	fileID := c.Query("fileID")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
		return
	}

	data := models.GetSingleTextModel(fileID)

	c.JSON(http.StatusOK, gin.H{
		"data": data,
	})
}

// DeleteTextController : delete text's file controller
func DeleteTextController(c *gin.Context) {
	userID := c.Query("userID")
	fileID := c.Query("fileID")

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Require fileID",
		})
		return
	}

	suc := models.DeleteTextModel(userID, fileID)

	if suc != "OK" {
		c.JSON(http.StatusBadRequest, "Fatal upload file")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": suc,
	})
}

// UpdateTextController : update text's file controller
func UpdateTextController(c *gin.Context) {
	fileID := c.Query("fileID")
	title := c.Query("title")
	comment := c.Query("comment")

	fmt.Println("aaa", title)

	err := libs.FileIDValidate(fileID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"data": "Not receive fileID",
		})
		return
	}

	models.UpdateTextModel(fileID, title, comment)

	c.JSON(http.StatusOK, gin.H{
		"data": "Update Text table",
	})

}
