package controllers

import (
	"EX/auth/src/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Register : post user information from database
func Register(c *gin.Context) {
	name := c.Param("name")
	pass := c.Param("pass")

	if name == "" {
		c.JSON(http.StatusBadRequest, "require username")
		return
	}

	if pass == "" {
		c.JSON(http.StatusBadRequest, "require username")
		return
	}

	if err := models.CreateUser(name, pass); err != nil {
		fmt.Println("User create ...NO")
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "Failed to create User information",
		})
	} else {
		fmt.Println("User create ...OK")
		c.JSON(http.StatusOK, gin.H{
			"data": name,
		})
	}
}
