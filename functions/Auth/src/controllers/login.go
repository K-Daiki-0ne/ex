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

// Response : response user information
type Response struct {
	ID       string `json:"id"`
	Username string `json:"username"`
}

// Login : get user information from database
func Login(c *gin.Context) {
	name := c.Param("name")
	pass := c.Param("pass")

	var user = User{
		Username: name,
		Password: pass,
	}

	/*
	 * 取得したユーザーネームとパスワードと一致するかを確認する
	 * ModelのLoginにnameとpassを引数に入れる
	 */

	// Confirm Username is space or not space.
	if user.Username == "" {
		c.JSON(http.StatusUnauthorized, "require username")
	}

	// Confirm Password is space or not space.
	if user.Password == "" {
		c.JSON(http.StatusUnauthorized, "requrie password")
	}

	/*
		Model's Login inputs username password.
		Hashed password compares origin password in Model Login.
		If doesn't exit user information that Login controller response error status.
	*/

	// Create JWT token
	token, err := middleware.AuthMiddleware(1)

	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err.Error())
		return
	}

	var response = Response{
		ID:       token,
		Username: user.Username,
	}

	// If get user information succesfull that Login controller response success status.
	c.JSON(http.StatusOK, response)
}
