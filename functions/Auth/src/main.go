package main

import (
	"EX/auth/src/config"
	"EX/auth/src/router"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	config.Connect()
}

func main() {
	app := gin.Default()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH"},
		AllowCredentials: true,
	}))
	router.Router(app)
	fmt.Println("Auth server listening ...OK")
	defer config.Close()
	app.Run(":4000")
}
