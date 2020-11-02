package database

import (
	"EX/auth/src/config"

	"github.com/jinzhu/gorm"

	// MySQL Driver
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	// DBConnect config/db.go instance object
	DBConnect *gorm.DB = config.Connect()
)
