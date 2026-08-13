import './css/jogo.css'



interface AlunoProps{
  nome: string;
  idade: number;
  curso: string;
}


 export function Aluno({nome, idade, curso}: AlunoProps){
  return(
    <div className="card">
      <h1 className="texto">Aluno:{nome}</h1>
      <h2 className="texto">Idade:{idade}</h2>
      <h2 className="texto">Curso: {curso}</h2>
    </div>
  )
}