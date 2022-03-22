import party from "./ZapRecall-Recursos/party.png"
import sad from "./ZapRecall-Recursos/sad.png"

export default function TesteProgresso(props) { 
    let keyT = 0;
    const {Ncards, emots, reprovacao, desempenho} = props;
    if (Ncards === emots.length){
        const css = "progresso resultado"
        if (reprovacao) {
            return (
                <div className={css}>
                    <img src={sad} alt="sad" key={'sad'}></img>
                    <h3>PUTZ!</h3>
                    <p>Ainda faltaram alguns...Mas não desanime!</p>
                    {emots.map((emot) => <img src={emot} alt="*" key={keyT++}></img>)}
                    <button className="restart" onClick={() => window.location.reload()}>REINICIAR RECALL</button>
                </div>
            );
        }else{
            return (
                <div className={css}>
                    <img src={party} alt="party" key={'party'}></img>
                    <h3>PARABÉNS!</h3>
                    <p>Você não esqueceu de nenhum flashcard!</p> 
                    {emots.map((emot) => <img src={emot} alt="*" key={keyT++}></img>)}
                    <button className="restart" onClick={() => window.location.reload()}>REINICIAR RECALL</button>
                </div>
            );
        }        
    }else{
        return (
        <div className="progresso">
            <p>{desempenho}/{Ncards} Concluídos</p>
            {emots.map((emot) => <img src={emot} alt="*" key={'quest'}></img>)}
        </div>
            );
    }
}   
