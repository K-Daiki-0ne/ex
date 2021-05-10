package main

import (
	"EX/app/src/config"
	"EX/app/src/router"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {

}

func main() {
	app := gin.Default()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
	}))
	router.Router(app)
	config.Connect()
	fmt.Println("APP server listening ...OK")
	defer config.Close()
	app.Run(":5050")
}
