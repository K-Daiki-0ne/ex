package test

import (
	"EX/app/src/config"
	"testing"
)

const (
	DBUser = "user1"

	DBPass = "Password_01"

	DBProt = "tcp(localhost:3306)"

	DBName = "ex"
)

func TestPaht(t *testing.T) {
	var suc string = config.Path(DBUser, DBPass, DBProt, DBName)

	if suc == "user1:Password_01@tcp(localhost:3306)/ex?charset=utf8&parseTime=True&loc=Local" {
		t.Log("Test create database path ...OK")
	} else {
		t.Fatalf("Test create database path ...NO")
	}
}
