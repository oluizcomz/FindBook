import { z } from "zod";

const bookSchema =  z.object({
    title: z.string(),
    authors: z.array(z.string()),
    isbn: z.string(),
    pageCount: z.number(),
    thumbnailUrl: z.string(),
    publishedDate: z.object({
        $date: z.string()
    }),
    thumbnail: z.string(),
    shortdescription: z.string(),
    longDescription: z.string(),
    status: z.string(),
    categories: z.array(z.string()),
});
type Book = z.infer<typeof bookSchema>;
export type BookDto = Book;