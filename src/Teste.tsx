import { Produto } from './components/produto'


export default function Teste(){
    return(
        <div>
            <h1>Meus produtos</h1>
            <Produto nome='Skibidi toilet' preço={150} />
            <Produto nome='Controle XBOX' preço={360} />
            <Produto nome='Mesa digitalizadora' preço={2000} />
        </div>
    )
}