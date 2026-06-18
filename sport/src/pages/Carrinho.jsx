import { useState } from "react";
import "./Carrinho.css";
import { useNavigate } from "react-router-dom";

export default function Carrinho({ carrinho, setCarrinho, removerItem, limparCarrinho }) {
  const navegar = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const aumentarQtd = (id) => {
    setCarrinho((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const diminuirQtd = (id) => {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = carrinho.reduce(
    (soma, item) => soma + item.price * (item.quantity || 1),
    0
  );

  const quant = carrinho.reduce(
    (soma, item) => soma + (item.quantity || 1),
    0
  );

  const finalizarCompra = () => {
    if (carrinho.length === 0) return;

    setMensagem(`🎉 Compra realizada com sucesso! Total: R$ ${total.toFixed(2)}`);
    limparCarrinho();
  };

  return (
    <div className="carrinho-container">
      <div className="top-bar">
        <button className="btn-voltar" onClick={() => navegar("/")}>
          ← Continuar comprando
        </button>

        <h1>Seu Carrinho</h1>
      </div>

      {mensagem && <div className="sucesso">{mensagem}</div>}

      <div className="carrinho-layout">
        <div className="lista-carrinho">
          {carrinho.map((item) => (
            <div key={item.id} className="item-carrinho">
              <div className="info-item">
                <h2>{item.title}</h2>

                <p className="preco">
                  R$ {item.price.toFixed(2)}
                </p>

                <div className="quantidade">
                  <button onClick={() => diminuirQtd(item.id)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => aumentarQtd(item.id)}>+</button>
                </div>

                {item.tamanho && (
                  <span className="tag">Tamanho: {item.tamanho}</span>
                )}
              </div>

              <button
                className="btn-remover"
                onClick={() => removerItem(item.id)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        <div className="resumo">
          <h2>Resumo do pedido</h2>

          <div className="linha">
            <span>Itens:</span>
            <span>{quant}</span>
          </div>

          <div className="linha total">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <button className="finalizar" onClick={finalizarCompra}>
            Finalizar compra
          </button>

          <button className="limpar" onClick={limparCarrinho}>
            Limpar carrinho
          </button>
        </div>
      </div>
    </div>
  );
}