package controllers

import (
	"EX/auth/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Register : post user information from database
func Register(c *gin.Context) {
	name := c.Param("name")
	pass := c.Param("pass")

	if name == "" {
		c.JSON(http.StatusBadRequest, "require username")
	}

	if pass == "" {
		c.JSON(http.StatusBadRequest, "require username")
	}

	if err := models.CreateUser(name, pass); err != nil {
		c.JSON(http.StatusUnauthorized, "Failed to create User information")
	}

	c.JSON(http.StatusOK, gin.H{
		"data": name,
	})

}
