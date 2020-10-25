package router

import "github.com/gin-gonic/gin"

// Router : Auth server routering func
func Router(app *gin.Engine) {
	app.GET("/auth/login")
}
