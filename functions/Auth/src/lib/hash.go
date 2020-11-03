package lib

import "golang.org/x/crypto/bcrypt"

// HashPassword : input password to be Hashed Password
func HashPassword(password string) ([]byte, error) {
	return bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
}
