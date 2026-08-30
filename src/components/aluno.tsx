import './css/aluno.css'

interface AlunoProps{
    nome: string
    idade: number
}

export function Aluno({nome, idade}: AlunoProps){
    return(
        <div className="aluno">
            <h2>Nome: {nome}</h2>
            <h2>Idade: {idade}</h2>
        </div>
    )
}