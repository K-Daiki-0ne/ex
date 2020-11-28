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
	}

	t.Log(suc)

	t.Log("Test HashPassword ...OK")
}

func TestCompareHashPassword(t *testing.T) {
	hashedPass, fail := lib.HashPassword(password)

	if fail != nil {
		t.Fatalf("Create HashPassword ...NO")
	}

	err := lib.CompareHashPassword(hashedPass, password)

	if err != nil {
		t.Fatalf("Test CompareHashPassword ...NO")
	}

	t.Log("Test CompareHashPassword ...OK")
}
