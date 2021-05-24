package test

import (
	"EX/app/src/config"
	"testing"
)

func TestConnect(t *testing.T) {
	suc := config.Connect()

	if suc != nil {
		t.Log("Test TestConnect ...OK")
	} else {
		t.Fatalf("Test TestConnect ...NO")
	}
}
