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
	Username string `json:"username"`
	Password string `json:"password"`
}

const (
	// Dialect Use DataBase name
	// Dialect = os.Getenv("DB")
	Dialect = "mysql"

	// DBUser MySQL's user name
	// DBUser = os.Getenv("DB_USER")
	DBUser = "user1"

	// DBPass MySQL's user password
	DBPass = "Password_01"

	// DBProt MySQL protocol
	DBProt = "tcp(localhost:3306)"

	// DBName MySQL table name
	DBName = "ex"
)

// Connect : Database connect function
func Connect() *gorm.DB {
	connect := Path(DBUser, DBPass, DBProt, DBName)
	fmt.Println(connect)
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
