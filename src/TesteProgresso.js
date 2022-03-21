
export default function TesteProgresso(props) { 
    const {Ncards, emots, reprovacao, desempenho} = props;
    if (Ncards === emots.length){
        const css = "progresso resultado"
        if (reprovacao) {
            return (
                <div className={css}>
                    <img src="/ZapRecall-Recursos/sad.png" alt="sad"></img>
                    <h3>PUTZ!</h3>
                    <p>Ainda faltaram alguns...Mas não desanime!</p>
                    {emots.map((emot) => <img src={emot} alt="*"></img>)}
                    <button className="restart">REINICIAR RECALL</button>
                </div>
            );
        }else{
            return (
                <div className={css}>
                    <img src="/ZapRecall-Recursos/party.png" alt="party"></img>
                    <h3>PARABÉNS!</h3>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    {emots.map((emot) => <img src={emot} alt="*"></img>)}
                    <button className="restart">REINICIAR RECALL</button>
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
