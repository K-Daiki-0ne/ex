package test

import (
	"EX/auth/src/lib"
	"testing"
)

func TestHashPassword(t *testing.T) {

	// Dummy Password
	var password string = "password"

	suc, err := lib.HashPassword(password)

	if err != nil {
		t.Fatalf("Test HashPassword ...NO")
	}

	t.Log(suc)

	t.Log("Test HashPassword ...OK")
}
