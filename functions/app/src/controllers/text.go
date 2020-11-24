package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Text : post text file
func Text(c *gin.Context) {
	// id = JWT token
	id := c.Query("userID")

	file, err := c.FormFile("file")

	log.Println(file.Filename)

	if err != nil {
		c.JSON(http.StatusBadRequest, "Not text file")
	}

	c.JSON(http.StatusOK, id)
}
