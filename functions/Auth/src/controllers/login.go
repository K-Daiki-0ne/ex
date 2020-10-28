package controllers

import (
	"EX/auth/src/middleware"
	"net/http"

	"github.com/gin-gonic/gin"
)

// User : post user type
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

var user = User{
	Username: "username",
	Password: "password",
}

// Login : get user information from database
func Login(c *gin.Context) {
	var u User
	err := c.ShouldBindJSON(&u)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, "Invalid json provided")
		return
	}

	if user.Username != u.Username || user.Password != u.Password {
		c.JSON(http.StatusUnauthorized, "Please provide valid login details")
		return
	}

	token, err := middleware.AuthMiddleware(1)

	c.JSON(http.StatusOK, token)
}
