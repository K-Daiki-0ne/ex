package test

import (
	"EX/auth/src/database"
	"testing"
)

func TestDatabase(t *testing.T) {
	db := database.DBConnect

	if db != nil {
		t.Log("Test database wrapper variable")
	} else {
		t.Fatalf("Fatal database variable")
	}
}
