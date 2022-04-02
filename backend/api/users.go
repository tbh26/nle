package api

import (
	"backend/nle/domain/users"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

func SignUp(c *gin.Context) {
	var ru users.RegisterUser
	e := c.ShouldBindJSON(&ru)
	if e != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": e.Error(),
		})
	}
	fmt.Printf("received: %#v \n", ru)
	c.JSON(http.StatusCreated, gin.H{
		"id":      102,
		"message": "user created (registered)",
	})
}
