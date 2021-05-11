package test

import (
	"EX/auth/src/lib"
	"testing"
)

// Dummy Password
var password string = "password"

func TestHashPassword(t *testing.T) {

	suc, err := lib.HashPassword(password)

	if err != nil {
		t.Fatalf("Test HashPassword ...NO")
		return
	}

	if suc != nil {
		t.Log("Test HashPassword ...OK")
	} else {
		t.Fatalf("Fatal create hashed password")
	}
}

func TestCompareHashPassword(t *testing.T) {
	hashedPass, fail := lib.HashPassword(password)

	if fail != nil {
		t.Fatalf("Create HashPassword ...NO")
		return
	}

	err := lib.CompareHashPassword(hashedPass, password)

	if err != nil {
		t.Fatalf("Test CompareHashPassword ...NO")
		return
	}

	t.Log("Test CompareHashPassword ...OK")
}
