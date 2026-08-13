
import './css/personagem.css'

interface PersonagemProps{
    nome: string;
    universo: string;
    idade: number;
}


export function Personagem({nome, universo, idade}: PersonagemProps){
    return(
        <div className="card">
            <h1 className="texto">Nome:{nome} </h1>
            <p className="texto">Universo:{universo}</p>
            <p className="texto">Idade: {idade}</p>
        </div>
    )
}