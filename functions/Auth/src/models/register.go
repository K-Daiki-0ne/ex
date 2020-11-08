package models

import (
	"EX/auth/src/database"
	"errors"
	"fmt"

	"gorm.io/gorm"
)

// User store database column
type User struct {
	gorm.Model
	Username string `json:"username"`
	Password []byte `json:"password"`
}

// Register : register user information for database
func Register(name string, pass []byte) error {
	/*
		取得したユーザー情報をデータベースに保存する。
		データベースへの保存が成功した場合は成功
		失敗した場合は失敗
		とわかるような戻り値にする。
	*/
	db := database.DBConnect
	var newUser User
	newUser.Username = name
	newUser.Password = pass

	if newUser.Username == "" {
		return errors.New("required username")
	}

	if newUser.Password == nil {
		return errors.New("required Password")
	}

	if err := db.Where("username = ?", newUser.Username).First(&newUser).Error; err != nil {
		// Not user exit
		fmt.Println("Already user exit")

		db.Create(&newUser)
		return nil
	}

	// Already user exit
	fmt.Println("Already user exit")
	return errors.New("Already user exit")

}
