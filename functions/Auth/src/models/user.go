package models

import (
	"EX/auth/src/database"
	"EX/auth/src/lib"

	"gorm.io/gorm"
)

// User get user information for database
type User struct {
	gorm.Model
	Username string `json:"username"`
	Password string `json:"password"`
}

// GetUser : get user information for users table;
func GetUser(name string, password string) User {
	db := database.DBConnect
	var user User
	db.First(&user, "username = ?", name)
	return user
}

// CreateUser : create user model
func CreateUser(name string, password string) error {
	db := database.DBConnect
	hashedPassword, _ := lib.HashPassword(password)

	if err := db.Create(&User{Username: name, Password: string(hashedPassword)}).Error; err != nil {
		return err
	}

	return nil
}
