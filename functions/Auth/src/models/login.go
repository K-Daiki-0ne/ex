package models

import (
	"EX/auth/src/database"
	"EX/auth/src/lib"
	"errors"

	"gorm.io/gorm"
)

// USER get user information for database
type USER struct {
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

	var user USER

	// var username string

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

	if hashPass != nil {
		return errors.New("Failed compare password")
	}

	if err := db.Debug().Where("username = ?", name).Take(&user).Error; err != nil {
		return errors.New("Failed Login")
	}

	return nil
}
