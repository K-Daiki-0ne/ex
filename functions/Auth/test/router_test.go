package test

import (
	"EX/auth/src/router"
	"testing"

	"github.com/gin-gonic/gin"
)

func TestRouter(t *testing.T) {
	app := gin.Default()

	router.Router(app)
}
