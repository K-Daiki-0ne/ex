package controllers

import (
	"EX/auth/src/lib"
	"EX/auth/src/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Register : post user information from database
func Register(c *gin.Context) {
	name := c.Param("name")
	pass := c.Param("pass")
	hashPass, err := lib.HashPassword(pass)

	if name == "" {
		c.JSON(http.StatusBadRequest, "require username")
	}

	if pass == "" {
		c.JSON(http.StatusBadRequest, "require username")
	}

	if err != nil {
		errMessage := "Sorry, fatal"
		c.JSON(http.StatusBadRequest, errMessage)
	}

	err = models.Register(name, hashPass)

	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	c.JSON(http.StatusOK, "TRUE")
}
