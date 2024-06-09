import { BookEntity } from "../../domain/entity/book.entity";
import { BookDto } from "../dto/bookDTO";

abstract class BooksRepository {
    abstract create(dto: BookDto): void;
    abstract find(query: String): Promise< BookEntity[]| null>;
    abstract update(dto: BookDto, id: string): Promise< BookEntity| null>;
}
export {BooksRepository};