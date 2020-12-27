package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Single : get user post single file
func Single(c *gin.Context) {

	// Get User ID
	id := c.Query("id")

	// ユーザー名と一致するファイルを取得する。

	c.JSON(http.StatusOK, id)
}
