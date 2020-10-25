package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Logout : user logout from EX
func Logout(c *gin.Context) {
	response := "Logout"
	c.JSON(http.StatusOK, response)
}
