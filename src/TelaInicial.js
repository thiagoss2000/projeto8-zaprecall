import { useState } from "react";
import React from "react";
import obj from "./object";
import Perguntas from "./Perguntas";
import NewCard from "./NewCard";

let qtdCards = 0;

class Input extends React.Component {

    constructor(){
        super();
        this.state = {
            nome: ""
        };
        this.onChange = (evento) => {
            this.setState({nome: evento.target.value});
            qtdCards = (this.state.nome);
        };
    }
    render() {
        return <input type="number" nome="nome" placeholder="numero de cards" value={this.state.nome} min={1} onChange={this.onChange} />;
    }
}

export default function TelaInicial() {   
    
    let deck = obj.deck;

    const cards =NewCard(qtdCards, deck);

    const [visivel, setVisivel] = useState(false);
    if (visivel){
        return (
            <>
            <Perguntas cards={cards} />
            </>);
    }else{
        return(
            <div className="telaInicial">
                <div className="imgLogo">
                    <img src="/ZapRecall-Recursos/logo.png" alt="logo"></img>
                </div>
                <h1>ZapRecall</h1>
                <Input />
                <button className="iniciar" onClick={() => setVisivel(true)}>Iniciar Recall!</button>
            </div>
        );
    }
}