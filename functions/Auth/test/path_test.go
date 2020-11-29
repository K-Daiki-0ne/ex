package test

import (
	"EX/auth/src/config"
	"testing"
)

const (
	Dialect = "mysql"

	DBUser = "user1"

	DBPass = "Password_01"

	DBProt = "tcp(localhost:3306)"

	DBName = "ex"
)

func TestPath(t *testing.T) {
	var suc string = config.Path(DBUser, DBPass, DBProt, DBPass)

	if suc == "user1:Password_01@tcp(localhost:3306)/ex?charset=utf8&parseTime=True&loc=Local" {
		t.Log("Test HashPassword ...OK")
	} else {
		t.Fatalf("Test HashPassword ...NO")
	}
}
