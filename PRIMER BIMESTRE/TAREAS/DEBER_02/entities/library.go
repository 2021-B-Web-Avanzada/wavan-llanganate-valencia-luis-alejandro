package entities

import "time"


type Library struct {
	Id int64 `json:"id"`
	Location int64 `json:"location"`
	Responsable string `json:"responsable"`
	Books []Book `json:"books"`
	openingHour time.Time `json:"openingHour"`
}
