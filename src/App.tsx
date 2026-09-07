import { useState } from "react";
import "./app.css";

interface PersonagemProps {
  nome: string;
  classe: string;
  nivel: number;
  vida: number;
}

export default function App() {
  const [personagem, setPersonagem] = useState<PersonagemProps>({
    nome: "",
    classe: "",
    nivel: 0,
    vida: 0,
  });

  function aumentar10() {
    setPersonagem({ ...personagem, vida: personagem.vida + 10 });
  }

  function Diminuir() {
    setPersonagem({ ...personagem, vida: personagem.vida - 10 });
  }

  function SubirNivel() {
    setPersonagem({ ...personagem, nivel: personagem.nivel + 1 });
  }

  return (
    <div className="container">
      <h1 className="titulo">CADASTRO DE PERSONAGEM!</h1>

      <div className="formulario">
        <input
          className="input"
          placeholder="Digite um nome!"
          value={personagem.nome}
          onChange={(e) =>
            setPersonagem({
              ...personagem,
              nome: e.target.value,
            })
          }
        />

        <input
          className="input"
          placeholder="Digite uma classe!"
          value={personagem.classe}
          onChange={(e) =>
            setPersonagem({
              ...personagem,
              classe: e.target.value,
            })
          }
        />

        <input
          className="input"
          placeholder="Digite um nivel!"
          value={personagem.nivel}
          onChange={(e) =>
            setPersonagem({
              ...personagem,
              nivel: Number(e.target.value),
            })
          }
        />

        <input
          className="input"
          placeholder="Digite a vida!"
          value={personagem.vida}
          onChange={(e) =>
            setPersonagem({
              ...personagem,
              vida: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="informacoes">
        <h1>Personagem:</h1>

        <h2>
          Nome: <span>{personagem.nome}</span>
        </h2>

        <h2>
          Classe: <span>{personagem.classe}</span>
        </h2>

        <h2>
          Nivel: <span>{personagem.nivel}</span>
        </h2>

        <h2>
          Vida: <span>{personagem.vida}</span>
        </h2>
      </div>

      <div className="botoes">
        <button className="botao" onClick={aumentar10}>
          Aumentar +10
        </button>

        <button className="botao" onClick={Diminuir}>
          Diminuir -10
        </button>

        <button className="botao" onClick={SubirNivel}>
          Subir Nivel!
        </button>
      </div>
    </div>
  );
}
