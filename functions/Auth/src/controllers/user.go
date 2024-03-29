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
		return
	}

	// Confirm Password is space or not space.
	if pass == "" {
		c.JSON(http.StatusUnauthorized, "requrie password")
		return
	}

	user := models.GetUser(name, pass)

	// ゲストユーザーの場合はハッシュ化したパスワードとの比較は行わない
	if name == "Guest" {
		c.JSON(http.StatusOK, gin.H{
			"data": user,
		})
		return
	}

	hashPassword := models.GetUser(name, pass).Password

	fmt.Println(hashPassword)

	if err := lib.CompareHashPassword([]byte(hashPassword), pass); err != nil {
		fmt.Println("User exists ...NO")
		c.JSON(http.StatusUnauthorized, "User does not exist")
	} else {
		fmt.Println("User exits ...OK")
		c.JSON(http.StatusOK, gin.H{
			"data": user,
		})
	}
}

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