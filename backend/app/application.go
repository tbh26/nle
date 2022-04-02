package app

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
)

var (
	router = gin.Default()
)

func StartWebApp() {
	MapEndpoints()
	address := "0.0.0.0:8765"
	fmt.Printf("Starting webapplication at address %q. \n", address)
	e := router.Run(address)
	if e != nil {
		log.Printf("failure: %q ", e.Error())
	}
}
