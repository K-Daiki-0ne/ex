package controllers

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Pdf : post pdf file
func Pdf(c *gin.Context) {
	id := c.Query("userID")

	file, err := c.FormFile("pdf")

	log.Println(file.Filename)

	if err != nil {
		c.JSON(http.StatusBadRequest, "Not PDF file")
	}

	c.JSON(http.StatusOK, id)
}
