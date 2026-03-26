import { useState } from "react";
import "./Carrinho.css";
import { useNavigate } from "react-router-dom";

export default function Carrinho({ carrinho, removerItem, limparCarrinho }) {
  const navegar = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const finalizarCompra = () => {
    limparCarrinho();
    setMensagem("✅ Compra realizada com sucesso!");
  };

  return (
    <div className="carrinho">
      <button className="btn-voltar" onClick={() => navegar("/")}>
        🛍️ Continuar comprando
      </button>

      <h1>Bem vindo ao seu carrinho 🛒!</h1>

      {mensagem && <p className="sucesso">{mensagem}</p>}

      {carrinho.length === 0 ? (
        <p className="p">Seu carrinho está vazio 😢</p>
      ) : (
        <>
          <div className="lista-carrinho">
            {carrinho.map((item) => (
              <div key={item.id} className="item-carrinho">
                <h2>{item.title}</h2>
                <p>R$ {item.price}</p>
                <button onClick={() => removerItem(item.id)}>Remover</button>
              </div>
            ))}
          </div>

          <button className="finalizar" onClick={finalizarCompra}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}
