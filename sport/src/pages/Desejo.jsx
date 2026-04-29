import Header from "../components/Header";
import CardLoja from "../components/CardLoja";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Lista({
  favoritos,
  todosProdutos,
  toggleFavorito,
  setBusca,
  carrinho,
  setCarrinho
}) {
  const listaFavoritos = todosProdutos.filter((item) =>
    favoritos.includes(item.id)
  );

  const navegar = useNavigate();

  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");

  const abrirProdutoLocal = (item) => {
    setProdutoSelecionado(item);
    setTamanhoSelecionado("");
  };

  const adcionarAoCarrinho = () => {
    const produtoFinal = {
      ...produtoSelecionado,
      tamanho: tamanhoSelecionado,
    };

    setCarrinho([...carrinho, produtoFinal]);
    setProdutoSelecionado(null);
  };

  const limparProdutos = () => {
    setProdutoSelecionado(null);
    setTamanhoSelecionado("");
  };

  return (
    <div className="app">
      <Header setBusca={setBusca} />

      <div className="container-fav">
        <button className="btn-voltar" onClick={() => navegar("/")}>
          Continuar comprando
        </button>

        <h1 className="titulo">LISTA DE DESEJOS</h1>

        {listaFavoritos.length === 0 ? (
          <p className="sem-produto">
            Você ainda não adicionou nenhum favorito
          </p>
        ) : (
          <div className="lista-cards">
            {listaFavoritos.map((item) => (
              <CardLoja
                key={item.id}
                {...item}
                onClick={() => abrirProdutoLocal(item)}
                isFavorito={true}
                toggleFavorito={toggleFavorito}
              />
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {produtoSelecionado && (
        <div className="overlay">
          <div className="modal">
            <img
              src={produtoSelecionado.banner}
              alt={produtoSelecionado.title}
            />

            <h2>{produtoSelecionado.title}</h2>
            <p>{produtoSelecionado.category}</p>
            <p>R$ {produtoSelecionado.price}</p>

            {produtoSelecionado.tam && (
              <>
                <p>Selecione o tamanho</p>

                <div className="tamanhos">
                  {produtoSelecionado.tam.map((tamanho) => (
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
              disabled={produtoSelecionado.tam && !tamanhoSelecionado}
            >
              <p>Adicionar ao carrinho</p>
              <ShoppingCart size={14} />
            </button>

            <button className="btn-limpar" onClick={limparProdutos}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}