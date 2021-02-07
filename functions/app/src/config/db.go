package config

import (
	"fmt"

	"gorm.io/gorm"
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
func Connect() {
	fmt.Println("DB Open ...OK")
}

// Close : Database close function
func Close() {
	// db := Connect()
	// db.Close()
	fmt.Println("DB close ...OK")
}
