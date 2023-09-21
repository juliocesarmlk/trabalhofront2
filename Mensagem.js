import React from 'react';


function Mensagem({remetente, conteudo, background}){
    const ehEu = remetente === "Eu" || remetente === "eu";

    const mensagemStyle = {
        backgroundColor: ehEu ? "rgba(218, 199, 236, 0.76)" : "trasparent",
        marginLeft: ehEu ? "60%" : "1%",
        borderRadius: ehEu ? "12px" : "0",
        padding: ehEu ? "5px" : "0"
    }
    const remetenteVerde = {
        color: "green",
    }
    return (
        <div className='mensagem' style={mensagemStyle}>
            <div style={remetenteVerde}>{remetente}:</div> {conteudo}
        </div>
    );
}

export default Mensagem;