package main

import (
	"EX/auth/src/config"
	"EX/auth/src/router"
	"fmt"

	"github.com/gin-gonic/gin"
)

func init() {
	config.Connect()
}

func main() {
	app := gin.Default()
	router.Router(app)
	fmt.Println("Auth server listening ...OK")
	defer config.Close()
	app.Run(":4000")
}
