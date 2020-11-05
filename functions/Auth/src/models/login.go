package models

import (
	"EX/auth/src/database"
	"EX/auth/src/lib"
	"errors"
	"fmt"

	"gorm.io/gorm"
)

// User get user information for database
type User struct {
	gorm.Model
	ID       string `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

// Login Login model
func Login(name string, password string) error {
	/*
	 　controllerで利用する
	 　ユーザーネームとパスワードを引数で受け取り、データベースにアクセスする
	 　取得したデータを返す。
	*/

	db := database.DBConnect

	var user User
	// var hashPass error

	user.Username = name
	user.Password = password

	if user.Username == "" {
		return errors.New("require Username")
	}

	if user.Password == "" {
		return errors.New("require Password")
	}

	conPass, err := lib.HashPassword(user.Password)

	if err != nil {
		return errors.New("Failed password hash")
	}

	hashPass := lib.CompareHashPassword(conPass, user.Password)

	if hashPass == nil {
		if err := db.Where("username = ? AND password = ?", user.Username, user.Password).First(&user).Error; err != nil {
			fmt.Println(&user)
			return nil
		}
	}

	return errors.New("Failed login")
}
