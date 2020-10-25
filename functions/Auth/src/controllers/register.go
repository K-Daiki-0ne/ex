package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Register : post user information from database
func Register(c *gin.Context) {
	response := "Register"
	c.JSON(http.StatusOK, response)
}
