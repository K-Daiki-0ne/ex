package test

import (
	"EX/auth/src/config"
	"testing"
)

func TestConnect(t *testing.T) {
	suc := config.Connect()

	if suc != nil {
		t.Log(suc)
		t.Log("Test TestConnect ...OK")
	} else {
		t.Fatalf("Test TestConnect ...NO")
	}
}
