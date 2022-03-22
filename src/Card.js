import Vector from "./ZapRecall-Recursos/Vector.png"
import Vector1a from "./ZapRecall-Recursos/Vector(1a).png"
import Vector2a from "./ZapRecall-Recursos/Vector(2a).png"
import Vector3a from "./ZapRecall-Recursos/Vector(3a).png"

export default function Card(props) {
    const {setCard, card, nome, Css} = props;
    switch(Css) {
        case 'verde': 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src={Vector3a} alt=">"></img></button>; 
        case 'amarelo': 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src={Vector2a} alt=">"></img></button>; 
        case 'vermelho': 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src={Vector1a} alt=">"></img></button>;
        default: 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src={Vector} alt=">"></img></button>; 
    }
}