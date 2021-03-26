package models

import (
	"EX/app/src/database"

	"gorm.io/gorm"
)

type Comment struct {
	gorm.Model
	FileId      int    `json:"fileid"`
	FileType    string `json:"filetype"`
	FileTitle   string `json:"filetitle"`
	FileComment string `json:"filecomment"`
}

// commentArg CommentModel method argument
type commentArg struct {
	title    string
	comment  string
	fileId   int
	fileType string
}

// CommentModel insert file comment data from comment table
func (c commentArg) CommentModel() error {
	db := database.DBConnect

	var Comment Comment

	Comment.FileId = c.fileId
	Comment.FileType = c.fileType
	Comment.FileTitle = c.title
	Comment.FileComment = c.comment

	db.Create(&Comment)

	return nil

}

// GetCommentModel get data from comment table
func GetCommentModel(fileID string, fileType string) []Comment {
	db := database.DBConnect
	var comment []Comment
	db.Find(&comment, "file_id = ? AND file_type = ?", fileID, fileType)
	return comment
}
