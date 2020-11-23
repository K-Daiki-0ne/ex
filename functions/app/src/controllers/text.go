package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Text : post text file
func Text(c *gin.Context) {
	// id = JWT token
	id := c.Query("userID")

	c.JSON(http.StatusOK, id)
}
