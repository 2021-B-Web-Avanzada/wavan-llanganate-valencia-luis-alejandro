import { promises } from "fs";
import Book from "../entities/book.entity";

const JSONFilePath = './data/books.json'
const { readFile, writeFile, appendFile } = promises;


export default class BookController {
    static async createBook(newBook: Book) {
        const content = await readFile(JSONFilePath, 'utf-8');
        if (content !== '') {
            const books = await this.getAllBooks();
            const bookExists = books.filter(book => book.ISBN === newBook.ISBN)
            if (bookExists.length !== 0) {
                throw new Error('This book already exists');
            }
            books.push(newBook);
            writeFile(JSONFilePath, JSON.stringify(books, null, 4));
        } else {
            writeFile(JSONFilePath, JSON.stringify([newBook], null, 4));
        }
    }

    static async getAllBooks(): Promise<Book[]> {
        const books = await readFile(
            JSONFilePath,
            { encoding: 'utf-8' },
        )
        try {
            return JSON.parse(books)
        } catch (error) {
            throw new Error("An error has ocurred")
        }
    }

    static async getBookByISBN(ISBNBook: string): Promise<Book> {
        const books = await this.getAllBooks();
        const book = books.find(book => book.ISBN === ISBNBook);
        if (book) {
            return book
        } else {
            throw new Error("This book doesn't exist")
        }
    }

    static async updateBookByISBN(bookModified: Book) {
        const books = await this.getAllBooks()
        const bookExists = books.filter(book => book.ISBN === bookModified.ISBN)
        if (bookExists.length === 0) {
            throw new Error('Imposible to update a book that is not stored');
        }
        const booksAfterUpdate = books.map(book => {
            if (book.ISBN == bookModified.ISBN) {
                book = bookModified
            }
            return book;
        })
        await writeFile(JSONFilePath, JSON.stringify(booksAfterUpdate, null, 4))
    }

    static async deleteBookByISBN(ISBNBook: string) {
        const books = await this.getAllBooks()
        const bookExists = books.filter(book => book.ISBN === ISBNBook)
        if (bookExists.length === 0) {
            throw new Error('Imposible to delete a book that is not stored');
        }
        const booksAfterDelete = books.filter(book => book.ISBN !== ISBNBook)
        await writeFile(JSONFilePath, JSON.stringify(booksAfterDelete, null, 4))
    }
}