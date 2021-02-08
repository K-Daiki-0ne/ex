package database

import (
	"EX/app/src/config"

	"gorm.io/gorm"

	// MySQL Driver
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	// DBConnect config/db.go instance object
	DBConnect *gorm.DB = config.Connect()
)
