import { useState} from 'react'


export default function App(){
    const[input, setInput] = useState("")
    const[aluno, setAluno] =  useState("Sem Nenhum nome")
    const[idade, setIdade] = useState("")

    function mostrarAluno(){
        setAluno(input)

    }


    return(
        
        <div>
           <h1>Conhecendo UseState!</h1>

           <input
           placeholder="Digite um nome"
           value={input}
           onChange={ (e) => setInput(e.target.value)}
           />

           <br/><br/>

           <input
           placeholder="Digite uma idade"
           value={idade}
           onChange={(e) => setIdade(e.target.value)}/>


           <br/><br/>
           
           <button onClick={mostrarAluno}>Mostrar Aluno</button>

           <hr />


           <h2> Bem vindo: {aluno}</h2>
        </div>
        
    )
}