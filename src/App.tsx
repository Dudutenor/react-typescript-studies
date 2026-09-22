import { useState } from "react";

import type { FormEvent } from "react";

import './app.css'

interface GuildaProps {
  nome: string;
  lider: string;
  membros: number;
  nivel: number;
  ouro: number;
}

export default function App() {
  const [guildaForm, setGuildaForm] = useState<GuildaProps>({
    nome: "",
    lider: "",
    membros: 0,
    nivel: 0,
    ouro: 0,
  });

  const [guilda, setGuilda] = useState<GuildaProps>();

  function Cadastrar(event: FormEvent) {
    event?.preventDefault();

    setGuilda(guildaForm);
  }

  function Aumentar() {
    guilda &&
      Object.keys(guilda).length > 0 &&
      setGuilda({
        ...guilda,
        ouro: guilda.ouro + 100,
      });
  }

  function AumentarNivel() {
    guilda &&
      Object.keys(guilda).length > 0 &&
      setGuilda({
        ...guilda,
        nivel: guilda.nivel + 1,
      });
  }

  function RecrutarMembro() {
    guilda &&
      Object.keys(guilda).length > 0 &&
      setGuilda({
        ...guilda,
        membros: guilda.membros + 1,
      });
  }

  return (
    <div className="guilda-page">
      <h1 className="guilda-title">Cadastro de uma guilda!</h1>
      <form className="guilda-form" onSubmit={Cadastrar}>

        <div className="campo">
          <label>Nome da guilda:</label>
          <input
            type="string"
            required
            placeholder="Digite o nome da guilda"
            value={guildaForm.nome}
            onChange={(e) =>
              setGuildaForm({
                ...guildaForm,
                nome: e.target.value,
              })
            }
          />
        </div>

        <div className="campo">
          <label>Nome do Lider:</label>
          <input
            type="string"
            required
            placeholder="Digite o nome do Lider"
            value={guildaForm.lider}
            onChange={(e) =>
              setGuildaForm({
                ...guildaForm,
                lider: e.target.value,
              })
            }
          />
        </div>

        <div className="campo">
          <label>Numero de Membros:</label>
          <input
            type="number"
            min="1"
            required
            placeholder="Digite a quantid"
            value={guildaForm.membros}
            onChange={(e) =>
              setGuildaForm({
                ...guildaForm,
                membros: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="campo campo-ouro">
          <label>Numero de ouro:</label>
          <input
            type="string"
            required
            value={guildaForm.ouro}
            onChange={(e) =>
              setGuildaForm({
                ...guildaForm,
                ouro: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="campo campo-nivel">
          <label>Nivel da Guilda</label>
          <input
            type="string"
            required
            value={guildaForm.nivel}
            onChange={(e) =>
              setGuildaForm({
                ...guildaForm,
                nivel: Number(e.target.value),
              })
            }
          />
        </div>

        <input className="botao-cadastrar" type="submit" value="Cadastrar" />

        {guilda && Object.keys(guilda).length > 0 && (
          <section className="ficha-guilda">
            <h3><span className="ficha-label">Nome da Guilda</span> {guilda.nome}</h3>
            <h3><span className="ficha-label">Nome do Lider</span> {guilda.lider}</h3>
            <h3 className="ficha-nivel"><span className="ficha-label">Nivel da Guilda</span> {guilda.nivel}</h3>
            <h3><span className="ficha-label">Números de Membros</span> {guilda.membros}</h3>
            <h3 className="ficha-ouro"><span className="ficha-label">Numero de ouro</span> {guilda.ouro}</h3>

            <div className="acoes">
              <button className="botao-acao botao-ouro" type="button" onClick={Aumentar}>
                Aumentar 100 de Ouro!
              </button>

              <button className="botao-acao botao-nivel" type="button" onClick={AumentarNivel}>
                Aumentar Nivel da Guilda!
              </button>

              <button className="botao-acao botao-membro" type="button" onClick={RecrutarMembro}>
                Recrutar Membro!
              </button>
            </div>
          </section>
        )}
      </form>
    </div>
  );
}