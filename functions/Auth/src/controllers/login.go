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
	name := c.Param("name")
	pass := c.Param("pass")

	/*
	 * 取得したユーザーネームとパスワードと一致するかを確認する
	 * ModelのLoginにnameとpassを引数に入れる
	 */

	// Databaseに存在するユーザーネームとパスワードがパラメーターのユーザーネームとパスワードと一致するかを判定する
	// 一致しない場合はvalidate errorをレスポンスする。
	if user.Username != name || user.Password != pass {
		c.JSON(http.StatusUnauthorized, "Please provide valid login details")
		return
	}

	// MySQLのUserIDをAuthMiddlewareの引数に入れる
	token, err := middleware.AuthMiddleware(1)

	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err.Error())
		return
	}

	c.JSON(http.StatusOK, token)
}
