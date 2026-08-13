import { Aluno } from './components/aluno'
import {Produto} from './components/produto'
import {Musica} from './components/musica'
import {Jogo} from './components/jogo'
import {Filme} from './components/filme'
import {Personagem} from './components/personagem'
import {Anime} from './components/anime'

export default function App(){
    return(
        <div>
            <h1>Alunos do TypeScript + React JS</h1>

            <Aluno
             nome='Wellison'
             idade={9}
            curso='Uber'/>

            <Aluno
             nome='Eduardo'
             idade={10}
             curso='React'/>

            <h1>Produtos do Skibidi</h1>

            <Produto
             nome='Controle XBOX'
             preço={320}/>

            <Produto
             nome='Pelúcia da Maelle'
              preço={33}/>

            <Produto
             nome='Pelúcia do Verso'         
             preço={333}/>

            <h1>Musicas interessantes:</h1>

            <Musica
            artista='Lorien Testard'
            titulo='Une vie a peindre'
            duração='11:00'
            />
            
            <Musica
            artista='Lorien Testard'
            titulo='Une vie a Taimer'
            duração='11:00'
            />

            <Musica
            artista='Lorien Testard'
            titulo='Une vie a rever'
            duração='11:00'
            />

            <h1>Jogos e suas quantidades de horas:</h1>

            <Jogo
            nome='Clair Obscur: Expedition 33'
            genero='RPG'
            horasJogadas={80}
            />

            <Jogo
            nome='ROBLOX'
            genero='MultiPlataforma'
            horasJogadas={600}
            />

            <Jogo
            nome='The Binding of Isaac'
            genero='RogueLike'
            horasJogadas={800}
            />

            <h1>Meus filmes favoritos!</h1>
            
            <Filme
            titulo='Interestelar'
            diretor='Christopher Nolan'
            anoDeLancamento={2014}
            />

            <Filme
            titulo='Toy Story 2'
            diretor='John Lasseter'
            anoDeLancamento={1999}
            />

            <Filme
            titulo='Homem Aranha 3'
            diretor='Sam Raimi'
            anoDeLancamento={2007}
            />

            <Filme
            titulo='Devorador de Estrelas'
            diretor=' Christopher Miller'
            anoDeLancamento={2026}
            />


            <h1>Meus personagens de Ficção Favoritos!</h1>

            <Personagem
            nome='Verso Dessandre'
            idade={33}
            universo='Clair Obscur'
            />

            <Personagem
            nome='Lucy'
            idade={20}
            universo='Cyberpunk Edgerunners'
            />

            <Personagem
            nome='Ryoshu'
            universo='Limbus Company'
            idade={27}
            />


            <h1>Meus animes favoritos!</h1>


            <Anime
            nome='Attack On Titan'
            genero='Ação'
            ep={89}
            />


            <Anime
            nome='Cyberpunk Edgerunners'
            genero='Ficção Cientifica'
            ep={10}
            />

            <Anime
            nome='Hajime no Ippo'
            genero='Ação'
            ep={127}
            />




        </div>
    )
}