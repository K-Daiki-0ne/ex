package middleware

import (
	"fmt"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/joho/godotenv"
)

// AuthMiddleware : JWT Middleware
func AuthMiddleware(userid uint64) (string, error) {
	var err error
	fatal := godotenv.Load()
	if fatal != nil {
		fmt.Println("Fatal Load .env")
	}
	key := os.Getenv("SECRET_KEY")
	os.Setenv("ACCESS_KEY", key)
	atClaims := jwt.MapClaims{}
	atClaims["authorized"] = true
	atClaims["user_id"] = userid
	atClaims["exp"] = time.Now().Add(time.Minute * 15).Unix()
	at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)
	token, err := at.SignedString([]byte(os.Getenv("ACCESS_SECRET")))
	if err != nil {
		return "", err
	}
	return token, nil
}
