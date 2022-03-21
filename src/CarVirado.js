import { useState } from "react";

export default function CardVirado(props) {
    const {setCard, card, pergunta, emots, marcado, desempenho, reprovacao} = props;
    const [virar, setVirar] = useState(false);
    if (virar) {
        return (
            <div className="virado">
                <p>{pergunta.R}</p>
                <button className="A" onClick={() => {marcado[card] = "1a"; emots.push("/ZapRecall-Recursos/Vector(1a).png"); desempenho++; setCard(); reprovacao=true}}>Não lembrei</button>
                <button className="B" onClick={() => {marcado[card] = "2a"; emots.push("/ZapRecall-Recursos/Vector(2a).png"); desempenho++; setCard()}}>Quase não lembrei</button>
                <button className="C" onClick={() => {marcado[card] = "3a"; emots.push("/ZapRecall-Recursos/Vector(3a).png"); desempenho++; setCard()}}>Zap!</button>
            </div>
        );
    }else{
        return (
            <div className="virado">
                <p>{pergunta.Q}</p>
                <div className="virar" onClick={() => setVirar(!virar)}>
                    <img src="/ZapRecall-Recursos/setinha.png" alt="virar"></img>
                </div>
            </div>
        );
    }
}