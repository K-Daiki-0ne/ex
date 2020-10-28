package main

import (
	"EX/auth/src/router"
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	app := gin.Default()
	router.Router(app)
	fmt.Println("Auth server listening ...OK")
	app.Run(":4000")
}
