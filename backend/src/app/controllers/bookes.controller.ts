import { HttpRequest,HttpResponse } from "../../infra/http/httpAdapter";
import { BookDto } from "../dto/bookDTO";
import { BooksUseCase } from "../useCase/books.usecase";
class BooksController {
    constructor( private readonly booksUseCase:BooksUseCase) {
    }
    async create(HttpRequest: HttpRequest):Promise<HttpResponse> {
        try {
            const body: BookDto = HttpRequest.body;
            if (!body) {
                return {
                    status: 400,
                    message: "Body is required"
                }
            }
            console.log(body);
            const reponse = await this.booksUseCase.create(body);
            return {
                message: "Book created",
                status: 200,
                data: reponse
            }
            
        } catch (error: any) {
            return{
                status: 400,
                message: error.message
            }
        }
    }
    async find(HttpRequest: HttpRequest):Promise<HttpResponse> {
        try {
            console.log(HttpRequest);
            const query: String   = HttpRequest.query.query;
            if (!query) {
                return {
                    status: 400,
                    message: "Query is required"
                }
            }
            const reponse = await this.booksUseCase.find(query);
            return {
                message: "Book found",
                status: 200,
                data: reponse
            }
            
        } catch (error: any) {
            return{
                status: 400,
                message: error.message
            }
        }
    }
    async update(HttpRequest: HttpRequest):Promise<HttpResponse> {
        try {
            const body: BookDto = HttpRequest.body;
            const id: string = HttpRequest.params.id;
            if (!body || !id) {
                return {
                    status: 400,
                    message: "Body or ID is required"
                }
            }
            console.log(body);
            const reponse = await this.booksUseCase.update(body,id);
            return {
                message: "Book created",
                status: 200,
                data: reponse
            }
            
        } catch (error: any) {
            return{
                status: 400,
                message: error.message
            }
        }
    }
}
export { BooksController };