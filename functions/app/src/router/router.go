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
	 *	example: http://localhost:5050/app/single/text?fileID={fileID}
	 */
	app.GET("/app/single/text", controllers.GetSingleTextController)

	/*
	 *  Get single query user's userID post file
	 *	example: http://localhost:5050/app/single/image?fileID={fileID}
	 */
	app.GET("/app/single/image", controllers.GetSingleImageController)

	/*
	 *  Get single query user's userID post file
	 *	example: http://localhost:5050/app/single/pdf?fileID={fileID}
	 */
	app.GET("/app/single/pdf", controllers.GetSinglePDFController)

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
	app.DELETE("/app/delete/image", controllers.DeleteImageController)

	/*
	 *  Delete query user's userID pdf file
	 *  example: http://localhost:5050/app/delete/pdf?userID={userID}&fileID={fileID}
	 */
	app.DELETE("/app/delete/pdf", controllers.DeletePDFController)

	/*
	 *  Update query fileID's title & comment for texts table
	 *  example: http://localhost:5050/app/update/text?fileID={fileID}
	 */
	app.PUT("/app/update/text")

	/*
	 *  Update query fileID's title & comment for images table
	 *  example: http://localhost:5050/app/update/image?fileID={userID}
	 */
	app.PUT("/app/update/image")

	/*
	 *  Update query fileID's title & comment for pdfs table
	 *  example: http://localhost:5050/app/update/pdf?fileID={userID}
	 */
	app.PUT("/app/update/pdf")
}
