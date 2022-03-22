import reactDom from "react-dom";
import TelaInicial from "./TelaInicial";

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