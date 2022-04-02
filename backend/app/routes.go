package app

import "backend/nle/api"

func MapEndpoints() {
	router.GET("/api/ping", api.PingHandler)
}
