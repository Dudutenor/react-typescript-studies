import './css/jogo.css'

interface MusicaProps{
    titulo: string;
    artista: string;
    duração: string;
}

export function Musica({titulo, artista, duração}: MusicaProps){
    return(
        <div className='card'>
            <h1 className='texto'>Titulo:{titulo} </h1>
            <p className='texto'>Artista:{artista} </p>
            <p className='texto'>Duração:{duração}</p>
        </div>
    )
}