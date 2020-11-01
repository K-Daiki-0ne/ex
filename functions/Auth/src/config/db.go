package config

import "os"

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
func Connect() {
	/*
		Databaseに接続する処理を記述する。
		使用するDBはMySQL
	*/
}

// Close : Database close function
func Close() {
	/*
		Databaseを切断する処理を記述する。
	*/
}
