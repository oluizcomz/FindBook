import mongoose from "mongoose";
import { BookDto } from "../../app/dto/bookDTO";
import { BooksRepository } from "../../app/repository/books.repository";
import { BookEntity } from "../../domain/entity/book.entity";

const booksSchema = new mongoose.Schema({
    title: String,
    authors: [String],
    isbn: String,
    pageCount: Number,
    thumbnailUrl: String,
    publishedDate: {$date: Date},
    thumbnail: String,
    shortdescription: String,
    longDescription: String,
    status: String,
    categories:[ String],
});
const Books = mongoose.model("books", booksSchema);
class BooksRepositoryMongoose implements BooksRepository {
    
    async create(dto: BookDto) {
        const books = new Books(dto);
        return books.save();
    }
    async find(query: String): Promise< BookEntity[]| null> {
        const result = await Books.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { shortdescription: { $regex: query, $options: 'i' } },
                { longDescription: { $regex: query, $options: 'i' } },
                { authors: { $regex: query, $options: 'i' } }
            ]
        })
        .sort({ title: -1 })
        .exec();
        console.log(result);
    
        return  result as BookEntity[];;
    }
    async update(dto: BookDto, id: string) : Promise< BookEntity| null> {
        const result = await Books.findByIdAndUpdate(id, dto);
        return result ? result.toObject() : null;
    }
}
export { BooksRepositoryMongoose };
