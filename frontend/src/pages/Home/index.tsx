import { useCallback, useContext, useState } from "react"
import { Button } from "../../components/Button/Button"
import { Container } from "../../components/Container/Container"
import { Header } from "../../components/Header/Header"
import { Title } from "../../components/Title/Title"
import { Card } from "../../components/Card/Card"
import { Input } from "../../components/Input/Input"
import { sarchBooks } from "../../services/books"
import { BooksContext } from "../../context/books"


const genderBookes=[
  'Ação',
  'Aventura',
  'Biografia',
  'Comédia',
  'Drama',
  'Ficção'
]
export function Home() {
    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const {books, handleSetBooks} = useContext(BooksContext);
    const handleSelect = useCallback((title: string) => {
        if(selectedGender.includes(title)){
            setSelectedGender(selectedGender.filter((item) => item !== title))
        }else{
            setSelectedGender([...selectedGender, title])
        }
    }, [selectedGender]);
    const handleSubmit = useCallback( async(input: string) => {
        const response = await sarchBooks(input);
        console.log(response);
        handleSetBooks(response);
    }, [handleSetBooks]);


    return(
    <div className="mb-6">
      <Header />
      <Container>
        <Title title='O que você quer ler hoje?' />
        <div className="gap-8 grid md:grid-cols-6 grid-cols-3 my-6">
            {genderBookes.map((book) => (
            <Button 
                key={book}
                title={book} 
                variant={selectedGender.includes(book) ? 'dark' : 'light'} 
                onClick={() => handleSelect(book)}
            />
            ))}
        </div>
        <div className="py-7">
            <p className="text-evergreen font-semibold text-2xl">
                Sobre o que você gostaria de receber uma recomendação de livro?
            </p>
            <Input placeholder="Eu gostaria de ler..." onKeyDown={(e:any)=>{
                console.log('aqui');
                if(e.key === "Enter"){
                    handleSubmit(e.target.value);
                }
            }}/>
        </div>
        <Title title="Livros  recomendados" className="my-5"></Title>
        <div className="gap-4 grid md:grid-cols-3 ">
            {books.map((book) => {
                return <Card key={book._id} id={book._id} book={book}></Card>
            })}
        </div>
      </Container>
    </div>
    )
}
