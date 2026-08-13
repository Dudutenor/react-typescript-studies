
import './css/anime.css'

interface AnimeProps{
    nome: string;
    genero: string;
    ep: number;
}


export function Anime ({nome, genero, ep}: AnimeProps){
    return(
        <div>
            <h1>
                Nome: {nome}
            </h1>

            <p>
                Gênero:{genero}
            </p>

            <p>
                EPs: {ep}
            </p>
        </div>
    )
}