import {useState} from 'react'


export default function App(){
    const[input, setInput] = useState("")
    
    const[mensagem, setMensagem] = useState("Nenhuma mensagem")

    function mostrarMensagem(){
        setMensagem(input)
    }

    return(
        <div>
            <h1>Exercicio de useState!</h1>

            <h2>Digite uma mensagem:</h2>

            <input
            placeholder=''
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
            />
            <br /><br/>
            <button onClick={mostrarMensagem}>Mostrar Mensagem!</button>
            <h1>Mensagem: {mensagem}</h1>

        </div>
    )
}