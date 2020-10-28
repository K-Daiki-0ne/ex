package router

import (
	"EX/auth/src/controllers"

	"github.com/gin-gonic/gin"
)

// Router : Auth server routering func
func Router(app *gin.Engine) {
	// Get login information
	app.GET("/auth/login/:name/:pass", controllers.Login)

	// Register user information from database
	app.POST("/auth/register", controllers.Register)

	// Logout func
	app.GET("/logout")
}
