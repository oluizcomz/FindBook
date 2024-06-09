import { useCallback } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
import { Book } from "../../context/books";
type Props = {
    id:string
    book: Book
}

export function Card({id, book}: Readonly<Props>) {
  const navigate = useNavigate();
  const handkeSelectBook = useCallback(() => {
    console.log(id);
    navigate(`/${id}`);

  }, [id,navigate]);
  return (
    <div className="p-4 grid grid-cols-3  gap-3 flex-row shadow-lg rounded-lg border-gray-100 max-w-lg">
        <img className="col-span-1 w-full rounded-lg" src={book.thumbnailUrl} alt="" />
        <div className="col-span-2">
            <p className=" font-bold text-xl text-evergreen">{book.title}</p>
            <p className="font-light text-lg text-gray-500 md-5">{book.authors.join(", ")}</p>	
            <div className="gap-3 grid md:grid-cols-2 my-3 ">
              {book.categories.map((category) => {
                  return<Tag key={`${book._id}-${category}`} title={category}></Tag>
              })}
            </div>
            {book.shortdescription && (
              <p>
                <strong>
                  Sinopse:
                </strong>
                {book.shortdescription}
              </p>
            )}
            <Button title="Ver mais" variant="light" className="w-1/2" onClick={handkeSelectBook}></Button>
        </div>
    </div>
  ); 
}