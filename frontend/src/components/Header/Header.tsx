import backgroundImage from '../../assets/img/background-header.png'
import { Button } from "../Button/Button"
import { Container } from '../Container/Container'
import { HeaderTitle } from './HeaderTitle'
export function Header() {
  return (
  <header 
    style={{ backgroundImage: `url(${backgroundImage})` }}
    className='w-auto bg-cover bg-center'
    > 
    <Container>
    <HeaderTitle />
    <div className='mt-28'>
        <p className='md:text-7xl text-3xl font-bold text-evergreen'>Encontre livros que<br/>
        seja a sua cara!</p>
        <p className='text-gray my-5 text-xl'>Lorem Ipsum dolor sit amet</p>
        <Button title='Encontrar livros' />
    </div>
    </Container>
  </header>
  )

}