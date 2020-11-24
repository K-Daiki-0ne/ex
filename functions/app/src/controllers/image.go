package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Image : post image file
func Image(c *gin.Context) {
	id := c.Query("userID")

	file, err := c.FormFile("image")

	log.Println(file.Filename)

	if err != nil {
		c.JSON(http.StatusBadRequest, "Not image file")
	}

	c.JSON(http.StatusOK, id)
}
