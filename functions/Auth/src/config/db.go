package config

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
)

// User : user type
type User struct {
	gorm.Model
	Username string `json:"username"`
	Password string `json:"password"`
}

var (
	// Dialect Use DataBase name
	Dialect = os.Getenv("DB")

	// DBUser MySQL's user name
	DBUser = os.Getenv("DB_USER")

	// DBPass MySQL's user password
	DBPass = os.Getenv("DB_PASS")

	// DBProt MySQL protocol
	DBProt = os.Getenv("DB_PROT")

	// DBName MySQL table name
	DBName = os.Getenv("DB_NAME")
)

// Connect : Database connect function
func Connect() *gorm.DB {
	connect := Path(DBUser, DBPass, DBProt, DBName)
	db, err := gorm.Open(Dialect, connect)

	if err != nil {
		fmt.Println("DB connect ...NO")
	} else {
		db.AutoMigrate(&User{})
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
