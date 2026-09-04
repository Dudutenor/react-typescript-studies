import { useState } from "react"

interface PersonagemProps{
    nome: string;
    nivel: string;
    classe: string;
}

export default function App() {
    const[nome, setNome] = useState("");

    const[classe, setClasse] = useState("");

    const[nivel, setNivel] = useState("")

    const[infoPersonagem, setInfoPersonagem] = useState<PersonagemProps>()
    
    function CadastrarPersonagem(){
        setInfoPersonagem({
            nome: nome,
            nivel: nivel,
            classe: classe,
        })
    }
    return (
         <div>
            <h1>Cadastro de Personagem!</h1>
            <input
            placeholder="Digite um nome"
            value={nome}
            onChange={(e => setNome(e.target.value))}
            />

            <input
            placeholder="Digite a classe"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
            />

            <input
            placeholder="Digite um nivel"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
            />
<br />
            <button onClick={CadastrarPersonagem}>Cadastrar Personagem!</button>
<br />
            <h2>Personagem: {infoPersonagem?.nome}</h2>
            <p>Classe: {infoPersonagem?.classe}</p>
            <p>Nivel: {infoPersonagem?.nivel}</p>
        </div>
    )
}