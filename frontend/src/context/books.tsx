import { createContext, ReactNode, useState } from "react"
export type Book = {
    title: string, 
    authors: string[], 
    isbn: string, 
    pageCount: number, 
    thumbnailUrl: string,
    publishedDate: Date | null,
    thumbnail: string, 
    shortdescription: string, 
    longDescription: string,
    status: string, 
    categories: string[],
    _id: string
}
type PropsContext = {
    books: Book[],
    handleSetBooks: (book: Book[]) => void;
}
export const BooksContext = createContext({}as PropsContext);

export function BooksProvider({children}: {children: ReactNode}) {
    const [books, setBooks] = useState<Book[]>([]);
    function handleSetBooks(books: Book[]) {
        setBooks(books);
    }

    return (
    <BooksContext.Provider 
        value={{
            books,
            handleSetBooks
        }}>
            {children}
            </BooksContext.Provider>
    )
}