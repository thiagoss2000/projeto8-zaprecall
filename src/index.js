import reactDom from "react-dom";
import TelaInicial from "./TelaInicial";
import Perguntas from "./Perguntas";

function Conteudo() {

    return (
        <>
            <TelaInicial />
        </>
    );
}
const render = Conteudo();
const divRoot = document.querySelector(".root");

reactDom.render(render, divRoot);