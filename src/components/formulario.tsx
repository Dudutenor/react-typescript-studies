import { useState } from "react"
import './css/formulario.css'

    interface FormularioProps{
        cadastrarAluno: (nome: string, idade: number) => void
    }
    
export function Formulario({ cadastrarAluno }: FormularioProps){

    const[nome, setNome] = useState("")

    const[idade, setIdade] = useState(0)

    function Cadastrar(){
        cadastrarAluno(nome, idade)
    }


    
    return(
        <div className="formulario">
            
            <h2>Nome:</h2>
            <input
            placeholder="Digite um nome!"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />


            <h2>Idade:</h2>
            <input
            placeholder="Digite uma idade!"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
            />

            <button onClick={Cadastrar}>Cadastrar!</button>

        </div>
    )
}