export default function Card(props) {
    const {setCard, card, nome, Css} = props;
    switch(Css) {
        case 'verde': 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src="/ZapRecall-Recursos/Vector(3a).png" alt=">"></img></button>; 
        case 'amarelo': 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src="/ZapRecall-Recursos/Vector(2a).png" alt=">"></img></button>; 
        case 'vermelho': 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src="/ZapRecall-Recursos/Vector(1a).png" alt=">"></img></button>;
        default: 
        return <button className={Css} onClick={() => setCard(card)}>{nome}
        <img src="/ZapRecall-Recursos/Vector.png" alt=">"></img></button>; 
    }
}