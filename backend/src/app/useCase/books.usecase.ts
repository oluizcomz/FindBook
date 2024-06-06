import { BookDto } from "../dto/bookDTO";
import { BooksRepository } from "../repository/books.repository";

class BooksUseCase {
    private booksRepository: BooksRepository;
    constructor(booksRepository: BooksRepository) {
        this.booksRepository = booksRepository;
    }
    async create(dto: BookDto) {
        this.booksRepository.create(dto);
    }
    async find(dto: BookDto) {
        return this.booksRepository.find(dto);
    }
    async update(dto: BookDto, id: string) {
        return this.booksRepository.update(dto, id);
    }
}
export { BooksUseCase };