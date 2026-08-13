
import './css/jogo.css'

interface JogoProps{
    nome: string;
    genero: string;
    horasJogadas: number;
}


export function Jogo({nome, genero, horasJogadas}: JogoProps){
    return(
        <div className='card'>

            <h2 className='texto'>Jogo:{nome} </h2>

            <p className='texto'>Genero:{genero}</p>

            <p className='texto'>Horas jogadas:{horasJogadas}</p>

        </div>
    )
}