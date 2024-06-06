import { useCallback, useState } from "react"
import { Button } from "../../components/Button/Button"
import { Container } from "../../components/Container/Container"
import { Header } from "../../components/Header/Header"
import { Title } from "../../components/Title/Title"
import { Card } from "../../components/Card/Card"
import { Input } from "../../components/Input/Input"


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
    const handleSelect = useCallback((title: string) => {
        if(selectedGender.includes(title)){
            setSelectedGender(selectedGender.filter((item) => item !== title))
        }else{
            setSelectedGender([...selectedGender, title])
        }
    }, [selectedGender]);

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
            <Input placeholder="Eu gostaria de ler..."/>
        </div>
        <Title title="Livros  recomendados" className="my-5"></Title>
        <Card id="1"></Card>
      </Container>
    </div>
    )
}
