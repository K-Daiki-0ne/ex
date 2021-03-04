package models

import (
	"EX/auth/src/database"

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
func getUser(name string, password string) User {
	db := database.DBConnect
	var user User
	db.First(&user, "username = ?", name)
	db.Close()
	return user

}
