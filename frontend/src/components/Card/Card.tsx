import { useCallback } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useNavigate } from "react-router-dom";
type Props = {
    id:string
}

export function Card({id}: Readonly<Props>) {
  const navigate = useNavigate();
  const handkeSelectBook = useCallback(() => {
    navigate(`/${id}`);

  }, [id,navigate]);
  return (
    <div className="p-4 grid grid-cols-3  gap-3 flex-row shadow-lg rounded-lg border-gray-100 max-w-lg">
        <img className="col-span-1 w-full rounded-lg" src="https://picsum.photos/200" alt="" />
        <div className="col-span-2">
            <p className=" font-bold text-xl text-evergreen">title</p>
            <p className="font-light text-lg text-gray-500 md-5">author</p>
            <Tag title="test tag" className="mb-3"></Tag>
            <p>
              <strong>
                Sinopse:
              </strong>
              description
            </p>
            <Button title="Ver mais" variant="light" className="w-1/2" onClick={handkeSelectBook}></Button>
        </div>
    </div>
  ); 
}