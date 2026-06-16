import { ShoppingCart, Star, Flame } from "lucide-react";

export default function Modal({
  produto,
  tamanhoSelecionado,
  setTamanhoSelecionado,
  adcionarAoCarrinho,
  limparProdutos,
}) {
  return (
    <div className="overlay">
      <div className="modal">
        <img src={produto.banner} alt={produto.title} />

        <h2>{produto.title}</h2>

        <p>{produto.category}</p>

        <p>R$ {produto.price}</p>

        {produto.tam && (
          <>
            <p>Selecione o tamanho</p>

            <div className="tamanhos">
              {produto.tam.map((tamanho) => (
                <button
                  key={tamanho}
                  onClick={() => setTamanhoSelecionado(tamanho)}
                  className={`tamanho ${
                    tamanhoSelecionado === tamanho ? "ativo" : ""
                  }`}
                >
                  {tamanho}
                </button>
              ))}
            </div>

            {!tamanhoSelecionado && (
              <p style={{ color: "red" }}>Selecione um tamanho</p>
            )}
          </>
        )}

        <button
          className="add"
          onClick={adcionarAoCarrinho}
          disabled={produto.tam && !tamanhoSelecionado}
        >
          <p>Adicionar ao carrinho</p>
          <ShoppingCart size={14} />
        </button>

        <button className="btn-limpar" onClick={limparProdutos}>
          Fechar
        </button>
      </div>
    </div>
  );
}
