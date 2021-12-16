package entities

import "time"

type Book struct {
	ISBN          string    `json:"isbn"`
	Title         string    `json:title`
	Author        string    `json:author`
	DatePublished string    `json:datePublished`
	Available     time.Time `json:available`
}
