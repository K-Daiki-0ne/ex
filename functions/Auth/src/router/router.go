package router

import "github.com/gin-gonic/gin"

// Router : Auth server routering func
func Router(app *gin.Engine) {
	// Get login information
	app.GET("/auth/login")
}
