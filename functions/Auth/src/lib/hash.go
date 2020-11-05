package lib

import "golang.org/x/crypto/bcrypt"

// HashPassword : input password to be Hashed Password
func HashPassword(password string) ([]byte, error) {
	return bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
}

// CompareHashPassword :
func CompareHashPassword(hash, password string) error {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	if err != nil {
		if err == bcrypt.ErrMismatchedHashAndPassword {
			return err
		}
		return err
	}
	return nil
}
