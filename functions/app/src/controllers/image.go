package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Image : post image file
func Image(c *gin.Context) {
	id := c.Query("userID")

	c.JSON(http.StatusOK, id)
}
