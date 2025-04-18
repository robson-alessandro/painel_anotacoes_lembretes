import Card from '../Card';
import './Mural.css'
import cardsDb from '../../db/dbcards'
import CriarCard from '../CriarCard';
import { useState } from 'react';
import ModalCadastro from '../ModalCadastro';

const Mural = () =>{
    const [cards, setCards] = useState(cardsDb)
    const [ModalAberto, setModalAberto] = useState(false)

    const adicionarCard = (novoCard) =>{
        setModalAberto(!ModalAberto)
        setCards([...cards, novoCard])
    }

    return(
        <div className="conteudo_mural">
            {cards.map(card => 
            <Card 
                key = {card.titulo} 
                data = {card.data} 
                titulo = {card.titulo} 
                corFundo = {card.corFundo}
                conteudo = {card.conteudo}/>)}
            
            <CriarCard 
                abrirModal = {setModalAberto}/>
            
            <ModalCadastro 
                aberto = {ModalAberto} 
                adicionar = {adicionarCard} />
        </div>
        
    )
}

export default Mural;