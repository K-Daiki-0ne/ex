package controllers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// All : get all user's all file
func All(c *gin.Context) {
	name := c.Query("name")

	fmt.Println("username = ", name)

	/*
	 *  Get user's post all file from AWS's S3
	 *  response type Array
	 */

	c.JSON(http.StatusOK, name)
}
