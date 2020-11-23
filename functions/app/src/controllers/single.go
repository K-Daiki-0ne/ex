package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Single : get user post single file
func Single(c *gin.Context) {
	id := c.Query("id")

	/*
	 *  Get user's post single file from AWS's S3
	 *  response type object
	 */
	c.JSON(http.StatusOK, id)
}
