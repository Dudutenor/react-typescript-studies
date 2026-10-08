import { useState } from "react";
import "./App.css";

export default function App() {
  /* Estados */
  const [compras, setCompras] = useState<string[]>([]);

  const [editCompras, setEditCompras] = useState({
    enabled: false,
    produto: "",
  });

  const [input, setInput] = useState("");

  /* Funções */

  function Adicionar() {
    if (!input) {
      alert("Adiciona uma compra!");
      return;
    }

    if (editCompras.enabled) {
      salvarEdicao();
      return;
    }

    setCompras((compras) => [...compras, input]);
    setInput("");
  }

  function editarCompra(item: string) {
    setInput(item);
    setEditCompras({
      enabled: true,
      produto: item,
    });
  }

  function salvarEdicao() {
    const acharIndex = compras.findIndex(
      (produto) => produto === editCompras.produto,
    );
    const todasCompras = [...compras];
    todasCompras[acharIndex] = input;
    setCompras(todasCompras);
    setInput("");

    setEditCompras({
      enabled: false,
      produto: "",
    });
  }

  function excluirCompra(item: string) {
    const removerCompra = compras.filter((produto) => produto !== item);
    setCompras(removerCompra);
  }

  return (
    <div className="container">
      <h1 className="titulo">Listas de Compras!</h1>

      <div className="formulario">
        <input
          className="campo"
          placeholder="Adicione uma compra"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="botao-principal" onClick={Adicionar}>
          {editCompras.enabled ? "Atualizar Compra!" : "Adicionar Compra!"}
        </button>
      </div>

      <hr className="divisor" />

      {compras.map((item) => (
        <section className="item" key={item}>
          <span className="item-nome">{item}</span>
          <button className="botao-editar" onClick={() => editarCompra(item)}>
            Editar
          </button>
          <button className="botao-excluir" onClick={() => excluirCompra(item)}>
            Excluir!
          </button>
        </section>
      ))}
    </div>
  );
}