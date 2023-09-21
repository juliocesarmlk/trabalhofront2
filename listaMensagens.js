import React, { useState } from "react";
import Mensagem from "./Mensagem";
import "../listaMensagens.css";

function ListaDeMensagens() {
  const [remetente, setRemetente] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [mensagensExibidas, setMensagensExibidas] = useState([]);

  const enviarMensagem = () => {
    if (remetente.trim() !== "" && conteudo.trim() !== "") {
      const novaMensagem = { remetente, conteudo };
      setMensagensExibidas([...mensagensExibidas, novaMensagem]);
      setRemetente("");
      setConteudo("");
    }
  };

  const enterPressionado = (e) => {
    if (e.key === "Enter") {
      enviarMensagem();
    }
  };

  return (
    <div className="listaMensagens">
      {mensagensExibidas.map((mensagem, index) => (
        <Mensagem key={index} remetente={mensagem.remetente} conteudo={mensagem.conteudo} />
      ))}

      <div className="campo-envio">
        <input
          type="text"
          placeholder="Remetente"
          value={remetente}
          onChange={(e) => setRemetente(e.target.value)}
          className="input-remetente"
        />
        <input
          type="text"
          placeholder="Conteúdo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          className="input-conteudo"
          onKeyPress={enterPressionado}
        />
        <button onClick={enviarMensagem} className="envia">
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ListaDeMensagens;
