package config

import (
	"fmt"

	"github.com/jinzhu/gorm"

	// MySQL Driver
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

// User : user type
type User struct {
	gorm.Model
	Username string `json:"username" binding:"required" gorm:"unique;not null"`
	Password string `json:"password" binding:"required"`
}

// Connect : Database connect function
func Connect() *gorm.DB {

	/*
	 * Dialect	使用するDB
	 * DBuser		DBのユーザーネーム
	 * DBPass		DBユーザーのパスワード
	 * DBProt		DBのプロトコル
	 * DBName		使用するDBの名前
	 * 上記設定を /config/secret.go に記述
	 */

	connect := Path(DBUser, DBPass, DBProt, DBName)
	db, err := gorm.Open(Dialect, connect)

	if err != nil {
		fmt.Println("DB connect ...NO")
		return nil
	} else {
		db.AutoMigrate(&User{})

		// Guest User用に事前の事前作成
		db.Create(&User{Username: "Guest", Password: "12345"})

		fmt.Println("DB connect ...OK")
	}
	return db
}

// Close : Database close function
func Close() {
	db := Connect()
	db.Close()
	fmt.Println("DB close ...OK")
}
