package config

import (
	"fmt"

	"github.com/jinzhu/gorm"

	// MySQL Driver
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

// Image dsaf
type Image struct {
	gorm.Model
	ID       string `json:"id"`
	FileName string `json:"filename"`
	File     string `json:"file"`
}

// Text dfasfdsaf
type Text struct {
	gorm.Model
	ID       string `json:"id"`
	FileName string `json:"filename"`
	File     string `json:"file"`
}

// Pdf fdasfdsaf
type Pdf struct {
	gorm.Model
	ID       string `json:"id"`
	FileName string `json:"filename"`
	File     string `json:"file"`
}

// Connect dfsfsaf
func Connect() *gorm.DB {

	connect := Path(DBUser, DBPass, DBProt, DBName)
	db, err := gorm.Open(Dialect, connect)

	if err != nil {
		fmt.Println("DB connect ...NO")
	} else {
		db.AutoMigrate(&Image{})
		db.AutoMigrate(&Text{})
		db.AutoMigrate(&Pdf{})
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
