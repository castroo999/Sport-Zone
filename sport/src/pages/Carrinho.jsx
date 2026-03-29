import { useState } from "react";
import "./Carrinho.css";
import { useNavigate } from "react-router-dom";

export default function Carrinho({ carrinho, removerItem, limparCarrinho }) {
  const navegar = useNavigate();
  const [mensagem, setMensagem] = useState("");

  const finalizarCompra = () => {
    setMensagem(
      ` Compra realizada com sucesso! O valor da sua compra foi de: R$ ${total}`,
    );
    limparCarrinho();
  };

  const total = carrinho.reduce((soma, item) => soma + item.price, 0);
  const quant = carrinho.length;

  return (
    <div className="carrinho">
      <button className="btn-voltar" onClick={() => navegar("/")}>
        Continuar comprando
      </button>

      <h1>Bem vindo ao seu carrinho !</h1>

      {mensagem && <p className="sucesso">{mensagem}</p>}
      <h2>Total: R$ {total}</h2>
      <h2>Quantidade: {quant}</h2>
      {carrinho.length === 0 ? (
        <p className="p">Seu carrinho está vazio! </p>
      ) : (
        <>
          <div className="lista-carrinho">
            {carrinho.map((item) => (
              <div key={item.id} className="item-carrinho">
                <h2>{item.title}</h2>
                <p>R$ {item.price}</p>
                {item.tamanho &&(
                  <p>Tamanho: {item.tamanho}</p>
                )}
                <button onClick={() => removerItem(item.id)}>Remover</button>
              </div>
            ))}
          </div>
          <button className="limpar" onClick={limparCarrinho}>
            Limpar carrinho
          </button>
          <button className="finalizar" onClick={finalizarCompra}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}
