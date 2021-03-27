package config

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// Image table structure
type Image struct {
	gorm.Model
	UserID   string `json:"userid"`
	FileName string `json:"filename"`
	File     string `json:"file"`
	Title    string `json:"title"`
	Comment  string `json:"comment"`
}

// Text table structure
type Text struct {
	gorm.Model
	UserID   string `json:"userid"`
	FileName string `json:"filename"`
	File     string `json:"file"`
	Title    string `json:"title"`
	Comment  string `json:"comment"`
}

// Pdf table structure
type Pdf struct {
	gorm.Model
	UserID   string `json:"userid"`
	FileName string `json:"filename"`
	File     string `json:"file"`
	Title    string `json:"title"`
	Comment  string `json:"comment"`
}

// Connect dfsfsaf
func Connect() *gorm.DB {

	connect := Path(DBUser, DBPass, DBProt, DBName)
	db, err := gorm.Open(mysql.Open(connect), &gorm.Config{})

	if err != nil {
		fmt.Println("DB connect ...NO")
	} else {
		db.AutoMigrate(&Image{}, &Text{}, &Pdf{})

		fmt.Println("DB connect ...OK")
	}

	return db
}

// Close : Database close function
func Close() {
	db := Connect()
	close, err := db.DB()
	if err != nil {
		fmt.Println("DB close ...NO")
	}
	close.Close()
	fmt.Println("DB close ...OK")
}
