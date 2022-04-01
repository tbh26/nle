package app

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
)

var (
	router = gin.Default()
)

func pingHandler(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
}

func StartWebApp() {
	router.GET("/api/ping", pingHandler)
	address := "0.0.0.0:8765"
	fmt.Printf("Starting webapplication at address %q. \n", address)
	e := router.Run(address)
	if e != nil {
		log.Printf("failure: %q ", e.Error())
	}
}
