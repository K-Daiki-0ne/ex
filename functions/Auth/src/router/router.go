package router

import (
	"EX/auth/src/controllers"

	"github.com/gin-gonic/gin"
)

// Router : Auth server routering func
func Router(app *gin.Engine) {

 /*
	*  Get login information
	*	 example: http://localhost:4000/auth/login/:name/:pass
	*/
	app.GET("/auth/login/:name/:pass", controllers.Login)

 /*
	* Register user information from database
	*	example: http://localhost:4000/auth/register/:name/:pass
	*/
	app.POST("/auth/register/:name/:pass", controllers.Register)

}
