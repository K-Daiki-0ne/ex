package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Pdf : post pdf file
func Pdf(c *gin.Context) {
	id := c.Query("userID")

	c.JSON(http.StatusOK, id)
}
