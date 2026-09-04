import { useState } from "react";
import './App.css'
    interface JogadorProps{
        nome: string;
        horas: string;
        jogo: string;
    }
export default function App(){
    const[nome, setNome] = useState("");

    const[horas, setHoras] = useState("");

    const[jogo, setJogo] = useState("");

    const[infoJogador, setInfoJogador] = useState<JogadorProps>()

    function mostrarJogador(){
        setInfoJogador({
            nome: nome,
            horas: horas,
            jogo: jogo,
        })
    }

return(
    <div className="container">

        <div className="header">
            <span className="status">● ONLINE</span>
            <h1>PERFIL DE JOGADOR</h1>
            <p>REGISTRE SEUS DADOS NO SISTEMA</p>
        </div>

        <div className="form">

            <label>NOME DO JOGADOR</label>
            <input
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label>JOGO FAVORITO</label>
            <input
                placeholder="Digite seu jogo"
                value={jogo}
                onChange={(e) => setJogo(e.target.value)}
            />

            <label>HORAS JOGADAS</label>
            <input
                placeholder="Digite suas horas"
                value={horas}
                onChange={(e) => setHoras(e.target.value)}
            />

            <button onClick={mostrarJogador}>
                MOSTRAR PERFIL
            </button>

        </div>

        <div className="perfil">
            <div className="perfil-titulo">
                <span>PLAYER DATA</span>
                <span>///</span>
            </div>

            <h2>Nome: <span>{infoJogador?.nome}</span></h2>
            <h2>Jogo: <span>{infoJogador?.jogo}</span></h2>
            <h2>Horas: <span>{infoJogador?.horas}</span></h2>
        </div>

    </div>
)

}