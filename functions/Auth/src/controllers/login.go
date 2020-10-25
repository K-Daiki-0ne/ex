package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Login : get user information from database
func Login(c *gin.Context) {
	response := "Login"
	c.JSON(http.StatusOK, response)
}
