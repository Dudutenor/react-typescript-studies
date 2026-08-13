import './css/produto.css'

interface ProdutoProps{
    nome: string;
    preço: number;
}


export function Produto({nome, preço}: ProdutoProps){
    return(
        <div className="card">
            <h1 className="texto">Nome: {nome}</h1>
            <p className="texto"> Preço: {preço}</p>
        </div>
    )
}