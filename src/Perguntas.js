import { useState } from "react";
import Card from "./Card";
import TesteProgresso from "./TesteProgresso";
import logoPequeno from "./ZapRecall-Recursos/logo-pequeno.png"
import setinha from "./ZapRecall-Recursos/setinha.png"
import Vector1a from "./ZapRecall-Recursos/Vector(1a).png"
import Vector2a from "./ZapRecall-Recursos/Vector(2a).png"
import Vector3a from "./ZapRecall-Recursos/Vector(3a).png"
import "./css/reset.css";
import "./css/style.css";

let marcado = [];
let desempenho = 0;
let reprovacao = false;
let emots = [];

export default function Perguntas(props) {
    let keyC = 0;
    const {cards} = props;
    console.log(cards);
    const [card, setCard] = useState(null);
    return(
        <div className="telaInicial">
            <div className="logoMenor">
                <img src={logoPequeno} alt="logo"></img>
                <h2>ZapRecall</h2>
            </div>
            <div className="questoes">
                {cards.map ((cardA) => {
                    keyC ++;
                    let Css;
                    switch(marcado[cards.indexOf(cardA)]) {
                        case '1a': Css = "vermelho"; break;
                        case '2a': Css = "amarelo"; break;
                        case '3a': Css = "verde"; break;
                        default: Css = ""; break;
                    }
                    if (card !== cards.indexOf(cardA) || Css !== "") {
                        return <Card 
                        setCard={setCard} 
                        key={keyC}
                        nome={"Pergunta " + (cards.indexOf(cardA) +1)} 
                        card={cards.indexOf(cardA)} Css={Css} />;
                    }else{
                        return <CardVirado  
                        setCard={setCard} 
                        key={keyC}
                        pergunta={cards[cards.indexOf(cardA)]} 
                        card={cards.indexOf(cardA)} />;
                    }
                })
                }
            </div>
            <TesteProgresso 
                Ncards={cards.length} 
                desempenho={desempenho}
                reprovacao={reprovacao}
                emots={emots}
            />
        </div>
    );
}
function CardVirado(props) {
    const {setCard, card, pergunta} = props;
    const [virar, setVirar] = useState(false);
    if (virar) {
        return (
            <div className="virado">
                <p>{pergunta.R}</p>
                <button className="A" onClick={() => {marcado[card] = "1a"; emots.push(Vector1a); desempenho++; setCard(); reprovacao=true}}>Não lembrei</button>
                <button className="B" onClick={() => {marcado[card] = "2a"; emots.push(Vector2a); desempenho++; setCard()}}>Quase não lembrei</button>
                <button className="C" onClick={() => {marcado[card] = "3a"; emots.push(Vector3a); desempenho++; setCard()}}>Zap!</button>
            </div>
        );
    }else{
        return (
            <div className="virado">
                <p>{pergunta.Q}</p>
                <div className="virar" onClick={() => setVirar(!virar)}>
                    <img src={setinha} alt="virar"></img>
                </div>
            </div>
        );
    }
}
