import Book from "./book.entity";

type EPNLocationLibraries = "SISTEMAS" | "GEOLOGÍA" | "QUÍMICA" | "FORMACIÓN BÁSICA" |
                            "ADMINISTRACIÓN CENTRAL" | "CEC" | "MECÁNICA" | "CIENCIAS"

export default interface Library {
    id: number
    location : string
    responsable : string
    books: Book[]
    openingHours: string
}