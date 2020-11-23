package main

import (
	"EX/app/src/router"
	"fmt"

	"github.com/gin-gonic/gin"
)

func init() {

}

func main() {
	app := gin.Default()
	router.Router(app)
	fmt.Println("APP server listening ...OK")
	app.Run(":5050")
}
