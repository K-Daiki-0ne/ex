package router

import "github.com/gin-gonic/gin"

// Router : App server routing function
func Router(app *gin.Engine) {

	/*
	 *  Get all query name's user post files
	 *	example: http://localhost:5500/app/all/files?name={username}
	 */
	app.GET("/app/all/files")

	/*
	 *  Get single query name's user post file
	 *	example: http://localhost:5500/app/single/file?name={username}
	 */
	app.GET("/app/single/file")

	/*
	 *  Post query name's user text file
	 *  example: http://localhost:5500/app/text?name={username}
	 */
	app.POST("/app/text")

	/*
	 *  Post query name's user image file
	 *  example: http://localhost:5500/app/image?name={username}
	 */
	app.POST("/app/image")

	/*
	 *  Post query name's user image file
	 *  example: http://localhost:5500/app/image?name={username}
	 */
	app.POST("/app/pdf")
}
