import express, { Application } from "express";
import cors from "cors";
import { BooksRoutes } from "../router/books.routes";
import { connect } from "../dataBase/mongoose"; 
import Dotenv from "dotenv";
Dotenv.config();
class Express {
    app: Application;
    constructor() {
        this.app = express();
        this.initMiddlewares();
        BooksRoutes(this.app);
    }

    

    private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    }
    listen() {
        this.app.listen(3333, () => {
            connect();
            console.log("Server is running on port 3333");
        });
    }
}
export default Express;