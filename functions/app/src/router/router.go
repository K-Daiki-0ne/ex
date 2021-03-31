package router

import (
	"EX/app/src/controllers"

	"github.com/gin-gonic/gin"
)

// Router : App server routing function
func Router(app *gin.Engine) {

	/*
	 *  Get all query user's userID post files
	 *	example: http://localhost:5050/app/all/files?userID={userID}
	 */
	app.GET("/app/all/files", controllers.AllController)

	/*
	 *  Get single query user's userID post file
	 *	example: http://localhost:5050/app/single/file?userID={userID}
	 */
	app.GET("/app/single/file", controllers.Single)

	/*
	 *  Post query user's userID text file
	 *  example: http://localhost:5050/app/text?userID={userID}
	 */
	app.POST("/app/text", controllers.TextController)

	/*
	 *  Post query user's userID image file
	 *  example: http://localhost:5050/app/image?userID={userID}
	 */
	app.POST("/app/image", controllers.ImageController)

	/*
	 *  Post query user's userID image file
	 *  example: http://localhost:5050/app/pdf?userID={userID}
	 */
	app.POST("/app/pdf", controllers.PdfController)

	/*
	 *  Delete query user's userID text file
	 *  example: http://localhost:5050/app/delete/text?userID={userID}&fileID={fileID}
	 */
	app.DELETE("/app/delete/text", controllers.DeleteTextController)

	/*
	 *  Delete query user's userID image file
	 *  example: http://localhost:5050/app/delete/image?userID={userID}&fileID={fileID}
	 */
	app.DELETE("/app/delete/iamge", controllers.DeleteImageController)

	/*
	 *  Delete query user's userID pdf file
	 *  example: http://localhost:5050/app/delete/pdf?userID={userID}&fileID={fileID}
	 */
	app.DELETE("/app/delete/pdf", controllers.DeletePDFController)

}
