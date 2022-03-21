import reactDom from "react-dom";
import {useState} from "react"
import obj from "./object";

let marcado = [];
let desempenho = 0;
let reprovacao = false;
let emots = [];

function TelaInicial() {
    marcado = [];
    desempenho = 0;
    emots = [];
    reprovacao = false;
    
    const [visivel, setVisivel] = useState(false);
    if (visivel){
        return <></>;
    }else{
        return(
            <div className="telaInicial">
                <div className="imgLogo">
                    <img src="/ZapRecall-Recursos/logo.png" alt="logo"></img>
                </div>
                <h1>ZapRecall</h1>
                <button className="iniciar" onClick={() => setVisivel(true)}>Iniciar Recall!</button>
            </div>
        );
    }
}

function Perguntas() {
    const cards = obj.deck1;
    const [card, setCard] = useState(null);
    return(
        <div className="telaInicial">
            <div className="logoMenor">
                <img src="/ZapRecall-Recursos/logo-pequeno.png" alt="logo"></img>
                <h2>ZapRecall</h2>
            </div>
            <div className="questoes">
                {cards.map ((cardA) => {
                    let Css;
                    switch(marcado[cards.indexOf(cardA)]) {
                        case '1a': Css = "vermelho"; break;
                        case '2a': Css = "amarelo"; break;
                        case '3a': Css = "verde"; break;
                        default: Css = ""; break;
                    }
                    if (card !== cards.indexOf(cardA) || Css !== "") {
                        return <Card setCard={setCard} nome={"pergunta " + (cards.indexOf(cardA) +1)} card={cards.indexOf(cardA)} Css={Css} />;
                    }else{
                        return <CardVirado setCard={setCard} pergunta={cards[cards.indexOf(cardA)]} card={cards.indexOf(cardA)} />;
                    }
                })
                }
            </div>
            <TesteProgresso Ncards={cards.length} />
        </div>
    );
}
function Card(props) {
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
function CardVirado(props) {
    const {setCard, card, pergunta} = props;
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

function TesteProgresso(props) { 
    const {Ncards} = props;
    if (Ncards === emots.length){
        const css = "progresso resultado"
        if (reprovacao) {
            return (
                <div className={css}>
                    <img src="/ZapRecall-Recursos/sad.png" alt="sad"></img>
                    <h3>PUTZ!</h3>
                    <p>Ainda faltaram alguns...Mas não desanime!</p>
                    {emots.map((emot) => <img src={emot} alt="*"></img>)}
                </div>
            );
        }else{
            return (
                <div className={css}>
                    <img src="/ZapRecall-Recursos/party.png" alt="party"></img>
                    <h3>PARABÉNS!</h3>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    {emots.map((emot) => <img src={emot} alt="*"></img>)}
                </div>
            );
        }        
    }else{
        return (
        <div className="progresso">
            <p>{desempenho}/{Ncards} Concluídos</p>
            {emots.map((emot) => <img src={emot} alt="*"></img>)}
        </div>
            );
    }
}   

function Conteudo() {
    return (
        <>
            <Perguntas />
            <TelaInicial />
        </>
    );
}
const render = Conteudo();
const divRoot = document.querySelector(".root");

reactDom.render(render, divRoot);