import { promises } from "fs";
import Book from "../entities/book.entity";
import { DATA_FILE_PATH } from "../../environment/settings";
import LibraryController from "../../libraries/controllers/library.controller";

const JSONFilePath = DATA_FILE_PATH
const { readFile, writeFile, appendFile } = promises;


export default class BookController {
    static async createBook(newBook: Book, idLibrary: number) {
        let libraries = await LibraryController.getAllLibraries();
        const library = libraries.find(library => library.id = idLibrary);
        if (library) {
            const bookExists = library.books.filter(book => book.ISBN === newBook.ISBN)
            if (bookExists.length !== 0) {
                throw new Error('This book already exists');
            }
            library.books.push(newBook);
            libraries = libraries.map(
                lib => lib.id === library.id ? {...library} : lib
            )
            writeFile(JSONFilePath, JSON.stringify(libraries, null, 4));
        }
    }


    static async getAllBooks(idLibrary: number): Promise<Book[]> {
        const libraries = await LibraryController.getAllLibraries();
        const library = libraries.find(library => library.id = idLibrary);
        if (library && library.books !== undefined) {
            return library.books
        }
        throw new Error('Error in getAllBooks')
    }

    static async getBookByISBN(ISBNBook: string, idLibrary: number): Promise<Book> {
        const books = await this.getAllBooks(idLibrary);
        const book = books.find(book => book.ISBN === ISBNBook);
        if (book) {
            return book
        } else {
            throw new Error("This book doesn't exist")
        }
    }

    static async updateBook(bookModified: Book, idLibrary: number) {
        let libraries = await LibraryController.getAllLibraries();
        const library = libraries.find(library => library.id = idLibrary);
        if (library) {
            const bookExists = library.books.filter(book => book.ISBN === bookModified.ISBN)
            if (bookExists.length === 0) {
                throw new Error('This book doesnt exist');
            }
            library.books = library.books.map( book => {
                return book.ISBN === bookModified.ISBN ? bookModified : book;
            })
            await LibraryController.updateLibrary(library);
        }else{
            throw new Error('Imposible to update a book that is not stored in a library');
        }
    }

    static async deleteBookByISBN(ISBNBook: string, idLibrary: number) {
        let libraries = await LibraryController.getAllLibraries();
        let library = libraries.find(library => library.id = idLibrary);
        if (library) {
            const bookExists = library.books.filter(book => book.ISBN === ISBNBook)
            if (bookExists.length !== 0) {
                throw new Error('This book doesnt exist');
            }
            library.books = library.books.filter(book => book.ISBN !== ISBNBook);
            await LibraryController.updateLibrary(library);
        }else{
            throw new Error('Imposible to delete a book that is not stored in a library');
        }
    }
}