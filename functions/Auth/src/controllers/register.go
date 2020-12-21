package controllers

import (
	"EX/auth/src/lib"
	"EX/auth/src/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Register : post user information from database
func Register(c *gin.Context) {
	sucMessage := "TRUE"
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

	suc := models.Register(name, hashPass)

	if suc != nil {
		fmt.Println(suc)
		c.JSON(http.StatusNotFound, err)
	} else {
		c.JSON(http.StatusOK, sucMessage)
	}
}
