import { useState } from "react";
import React from "react";
import Perguntas from "./Perguntas";
import NewCard from "./NewCard";
import obj from "./object";
import logo from "./ZapRecall-Recursos/logo.png";

let qtdCards = 0;
let deck = obj.deck;

class Input extends React.Component {

    constructor(){
        super();
        this.state = {
            nome: ""
        };
        this.onChange = (evento) => {
            this.setState({nome: evento.target.value});
            qtdCards = this.state.nome;
        };
    }
    render() {
        return <input type="number" nome="nome" placeholder="numero de cards" value={qtdCards} min={0} max={deck.length} onChange={this.onChange} />;
    }
}

export default function TelaInicial() {   
    qtdCards = (qtdCards > deck.length ? deck.length : qtdCards);
    //console.log(qtdCards);
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
                    <img src={logo} alt="logo"></img>
                </div>
                <h1>ZapRecall</h1>
                <Input />
                <button className="iniciar" onClick={() => setVisivel(true)}>Iniciar Recall!</button>
            </div>
        );
    }
}