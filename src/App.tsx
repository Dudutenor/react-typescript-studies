import {useState} from 'react'

export default function App(){
    const[nome, setNome] = useState("")

    const[idade, setIdade] = useState("")
    
    const[nomeAluno, setNomeAluno] = useState("")

    const[idadeAluno, setIdadeAluno] = useState("")

    function mostrarAluno(){
        setIdadeAluno(idade)
        
        setNomeAluno(nome)
    }

    

    return(
        <div>
            <h1>Cadastro de Aluno!</h1>
            <p>Nome:</p>
            
            <input
            placeholder='Digite um Nome!'
            value={nome}
            onChange={(e) =>setNome(e.target.value) }/>
            
            <br />

            <p>Idade:</p>
            
            <input
            placeholder='Digite uma'
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            />

            <br />

            <button onClick={mostrarAluno}>Mostrar Aluno</button>
            <br />

            <h1>Aluno: {nomeAluno}</h1>
            <h1>idade: {idadeAluno}</h1>
        </div>
    )
}