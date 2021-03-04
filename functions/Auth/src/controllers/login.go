package controllers

import (
	"EX/auth/src/lib"
	"EX/auth/src/models"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Login : get user information from database
func Login(c *gin.Context) {
	name := c.Param("name")
	pass := c.Param("pass")

	// Confirm Username is space or not space.
	if name == "" {
		c.JSON(http.StatusUnauthorized, "require username")
	}

	// Confirm Password is space or not space.
	if pass == "" {
		c.JSON(http.StatusUnauthorized, "requrie password")
	}

	user := models.GetUser(name, pass)

	hashPassword := models.GetUser(name, pass).Password

	fmt.Println(hashPassword)

	if err := lib.CompareHashPassword([]byte(hashPassword), pass); err != nil {
		fmt.Println("User doesn't exit")
		c.JSON(http.StatusUnauthorized, "User does not exist")
	} else {
		fmt.Println("User exits")
		c.JSON(http.StatusOK, gin.H{
			"data": user,
		})
	}

}
