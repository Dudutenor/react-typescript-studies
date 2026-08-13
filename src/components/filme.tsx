import './css/filme.css'

interface FilmeProps{
    titulo: string;
    diretor: string;
    anoDeLancamento: number;
}


export function Filme({titulo, anoDeLancamento, diretor }: FilmeProps){
    return(
        <div className="card">
            
            <h1 className="texto">Nome: {titulo}</h1>
            <p className="texto">Diretor:{diretor}</p>
            <p className="texto">Ano de lançamento: {anoDeLancamento}</p>
        </div>
    )
}