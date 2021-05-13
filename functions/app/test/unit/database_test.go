package test

import (
	"EX/app/src/database"
	"testing"
)

func TestDatabase(t *testing.T) {
	db := database.DBConnect

	if db != nil {
		t.Log("Test database wrapper variable ...OK")
	} else {
		t.Error("Test database wrapper variable ...NO")
	}
}
