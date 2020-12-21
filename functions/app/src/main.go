package main

import (
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
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH"},
		AllowCredentials: true,
	}))
	router.Router(app)
	fmt.Println("APP server listening ...OK")
	app.Run(":5050")
}
