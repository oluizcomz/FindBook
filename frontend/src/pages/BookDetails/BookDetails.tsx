import classNames from "classnames";
import { useCallback } from "react"
import { Container } from '../../components/Container/Container'
import { HeaderTitle } from '../../components/Header/HeaderTitle'
import { Title } from '../../components/Title/Title'
import { Card } from "../../components/Card/Card";
import { useParams } from "react-router-dom";

type Props = {
    title: string
    className?: string
}
export function BookDetails(/*{ title, className }:  Readonly<Props> */) {
    const {id} =useParams();
    return (
    <Container>
        <HeaderTitle/>
        <div className="gap-4 grid md:grid-cols-2 grid-cols-1 mt-16">
            <div>
                <Title title="Nome do Livro" className="text-5xl folt-bold text-evergreen"/>
                <p className="text-xl text-gray-500 font-light py-4">
                    Author
                </p>
                <p className="text-gray-500 mt-6">
                    text
                </p>
            </div>
            <div>
                <img className="w-full rounded-lg" src="https://picsum.photos/200" alt="" />
            </div>
        </div>
        <div>
            <Title title="Recomendações com base nesse livro" className="my-5 text-5xl folt-bold text-evergreen"/>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    <Card id="1" />
                    <Card id="1"/>
                    <Card id="1"/>
                    <Card id="1"/>
                </div>
        </div>
    </Container>
 )
}
