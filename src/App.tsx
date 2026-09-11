import { useState } from "react";
import './App.css'

interface FichaProps {
  nomeJogador: string;
  nomePersonagem: string;
  classe: string;
  nivel: number;
  vida: number;
  item: string;
}

export default function App() {
  const [ficha, setFicha] = useState<FichaProps>({
    nomeJogador: "",
    nomePersonagem: "",
    classe: "",
    nivel: 0,
    vida: 0,
    item: "",
  });

  function AumentarLevel() {
    setFicha({ ...ficha, nivel: ficha.nivel + 1 });
  }

  function AumentarVida() {
    setFicha({ ...ficha, vida: ficha.vida + 1 });
  }

  function DiminuirVida() {
    setFicha({ ...ficha, vida: ficha.vida - 1 });
  }
return (
  <div className="pagina">

    <div className="ficha">

      <header className="cabecalho">
        <p className="subtitulo">DUNGEONS & DRAGONS</p>
        <h1>Ficha de Jogador</h1>
        <div className="linha-decorativa"></div>
        <p>Registre os detalhes do seu aventureiro</p>
      </header>

      <section className="dados">
        <h2 className="titulo-secao">Informações do Aventureiro</h2>

        <div className="campo">
          <label>Nome do Jogador</label>
          <input
            className="input"
            placeholder="Digite o nome do Jogador"
            value={ficha.nomeJogador}
            onChange={(e) =>
              setFicha({ ...ficha, nomeJogador: e.target.value })
            }
          />
        </div>

        <div className="campo">
          <label>Nome do Personagem</label>
          <input
            className="input"
            placeholder="Nome do Personagem"
            value={ficha.nomePersonagem}
            onChange={(e) =>
              setFicha({ ...ficha, nomePersonagem: e.target.value })
            }
          />
        </div>

        <div className="campo">
          <label>Classe</label>
          <input
            className="input"
            placeholder="Digite sua classe"
            value={ficha.classe}
            onChange={(e) =>
              setFicha({ ...ficha, classe: e.target.value })
            }
          />
        </div>

        <div className="linha">

          <div className="campo pequeno">
            <label>Nível</label>
            <input
              className="input"
              type="number"
              placeholder="Nível"
              value={ficha.nivel}
              onChange={(e) =>
                setFicha({
                  ...ficha,
                  nivel: Number(e.target.value),
                })
              }
            />
          </div>

          <div className="campo pequeno">
            <label>Vida</label>
            <input
              className="input"
              type="number"
              placeholder="Vida"
              value={ficha.vida}
              onChange={(e) =>
                setFicha({
                  ...ficha,
                  vida: Number(e.target.value),
                })
              }
            />
          </div>

        </div>

        <div className="campo">
          <label>Item Atual</label>
          <input
            className="input"
            placeholder="Coloque seu item atual"
            value={ficha.item}
            onChange={(e) =>
              setFicha({ ...ficha, item: e.target.value })
            }
          />
        </div>

      </section>

      <section className="personagem">

        <h2 className="titulo-secao">Registro do Personagem</h2>

        <div className="atributos">

          <div className="atributo">
            <span className="atributo-titulo">JOGADOR</span>
            <strong>{ficha.nomeJogador || "—"}</strong>
          </div>

          <div className="atributo">
            <span className="atributo-titulo">PERSONAGEM</span>
            <strong>{ficha.nomePersonagem || "—"}</strong>
          </div>

          <div className="atributo">
            <span className="atributo-titulo">CLASSE</span>
            <strong>{ficha.classe || "—"}</strong>
          </div>

          <div className="atributo destaque">
            <span className="atributo-titulo">NÍVEL</span>
            <strong>{ficha.nivel}</strong>
          </div>

          <div className="atributo vida">
            <span className="atributo-titulo">VIDA</span>
            <strong>{ficha.vida}</strong>
          </div>

          <div className="atributo">
            <span className="atributo-titulo">ITEM</span>
            <strong>{ficha.item || "—"}</strong>
          </div>

        </div>

      </section>

      <section className="acoes">

        <h2 className="titulo-secao">Ações</h2>

        <div className="botoes">

          <button className="botao" onClick={AumentarLevel}>
            ▲
            <span>Aumentar Nível</span>
          </button>

          <button className="botao perigo" onClick={DiminuirVida}>
            ▼
            <span>Diminuir Vida</span>
          </button>

          <button className="botao cura" onClick={AumentarVida}>
            ✚
            <span>Aumentar Vida</span>
          </button>

        </div>

      </section>

    </div>

  </div>
);
}
