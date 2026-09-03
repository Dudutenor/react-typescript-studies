import { useState } from "react"
import './App.css'
interface InfoProdutoProps{
    nome: string;
    preco: string;
}

export default function App() {
    const[precoInput, setPrecoInput] = useState("");
    const[produtoInput, setProdutoInput] = useState("");
    const[infoProduto, setInfoProduto] = useState<InfoProdutoProps>();

    function mostrarProduto(){
        setInfoProduto({
            nome: produtoInput,
            preco: precoInput,
        })
    }

    return (
         <div className="container">

        <h1>Sistema de Produtos!</h1>

        <input
            placeholder="Digite o nome do produto"
            value={produtoInput}
            onChange={(e) => setProdutoInput(e.target.value)}
        />

        <input
            placeholder="Digite o preço"
            value={precoInput}
            onChange={(e) => setPrecoInput(e.target.value)}
        />

        <button onClick={mostrarProduto}>
            Mostrar Produto!
        </button>

        <div className="resultado">
            <h2>Produto: {infoProduto?.nome}</h2>
            <h2>Preço: {infoProduto?.preco}</h2>
        </div>

    </div>

        
    )
}