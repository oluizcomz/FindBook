import classNames from "classnames";
import { useCallback, useContext, useEffect, useState } from "react"
import { Container } from '../../components/Container/Container'
import { HeaderTitle } from '../../components/Header/HeaderTitle'
import { Title } from '../../components/Title/Title'
import { Card } from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../context/books";
import { Book } from "../../context/books";

type Props = {
    title: string
    className?: string
}
export function BookDetails(/*{ title, className }:  Readonly<Props> */) {
    const {id} = useParams();
    const {books} = useContext(BooksContext);
    const [book, setBook] = useState <Book | null>();
    
    useEffect(() => {
        const findBook = books.find((book) => book._id === id);
        console.log('find', findBook);
        setBook(findBook);
    }, [books]);

    return (
    <Container>
        <HeaderTitle/>
        <div className="gap-4 grid md:grid-cols-2 grid-cols-1 mt-16">
            <div>
                <Title title={book?book.title:''} className="text-5xl folt-bold text-evergreen"/>
                <p className="text-xl text-gray-500 font-light py-4">
                    {book?.authors.join(", ")}
                </p>
                <p className="text-gray-500 mt-6">
                {book?.longDescription? book.longDescription : book?.shortdescription}
                </p>
            </div>
            <div>
                <img className="w-full rounded-lg" src={book?.thumbnailUrl} alt="" />
            </div>
        </div>
        <div>
            <Title title="Recomendações com base nesse livro" className="my-5 text-5xl folt-bold text-evergreen"/>
            <div className="gap-4 grid md:grid-cols-3 ">
            {books.map((book) => {
                return <Card key={book._id} id={book._id} book={book}></Card>
            })}
        </div>
        </div>
    </Container>
 )
}
