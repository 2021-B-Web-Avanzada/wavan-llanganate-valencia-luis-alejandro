import { promises } from "fs";
import Book from "../entities/book.entity";
import Library from "../entities/library.entity";

const JSONFilePath = './data/data.json'
const { readFile, writeFile, appendFile } = promises;


export default class LibraryController {
    static async createBook(newLibrary: Library) {
        const content = await readFile(JSONFilePath, 'utf-8');
        if (content !== '') {
            const libraries = await this.getAllLibraries();
            const libraryExists = libraries.filter(library => library.id === newLibrary.id)
            if (libraryExists.length !== 0) {
                throw new Error('This library already exists');
            }
            libraries.push(newLibrary);
            writeFile(JSONFilePath, JSON.stringify(libraries, null, 4));
        } else {
            writeFile(JSONFilePath, JSON.stringify([newLibrary], null, 4));
        }
    }

    static async getAllLibraries(): Promise<Library[]> {
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

    static async getLibraryById(idLibrary: number): Promise<Library> {
        const libraries = await this.getAllLibraries();
        const library = libraries.find(library => library.id === idLibrary);
        if (library) {
            return library
        } else {
            throw new Error("This library doesn't exist")
        }
    }

    static async updateLibrary(libraryModified: Library) {
        const libraries = await this.getAllLibraries()
        const libraryExists = libraries.filter(library => library.id === libraryModified.id)
        if (libraryExists.length === 0) {
            throw new Error('Imposible to update a book that is not stored');
        }
        const librariesAfterUpdate = libraries.map(library => {
            if (library.id == libraryModified.id) {
                library = libraryModified
            }
            return library;
        })
        await writeFile(JSONFilePath, JSON.stringify(librariesAfterUpdate, null, 4))
    }

    static async deleteLibraryById(idLibrary: number) {
        const libraries = await this.getAllLibraries()
        const libraryExists = libraries.filter(library => library.id === idLibrary)
        if (libraryExists.length === 0) {
            throw new Error('Imposible to delete a book that is not stored');
        }
        const librariesAfterDelete = libraries.filter(library => library.id !== idLibrary)
        await writeFile(JSONFilePath, JSON.stringify(librariesAfterDelete, null, 4))
    }
}