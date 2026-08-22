import {useState} from 'react'


export default function App(){
    const [input, setInput] = useState("")

    const [numero, setNumero] = useState(0)

    function Defenir(){
        setNumero( Number(input))
    }

    function Aumentar(){
        setNumero(numero + 1)
    }

    function Diminuir(){
        setNumero(numero - 1)
    }

    return(
        <div>
            <h1>Contador Personalizado</h1>

            <p>Digite um numero:</p>

            <input
            placeholder=''
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />

            <br/>

            <button onClick={Defenir}>Definir</button>

            <h2>Numero atual: {numero}</h2>

            <br />
        <button onClick={Aumentar}>
        Aumentar</button>
        <button onClick={Diminuir}
        >Diminuir</button>

        </div>
    )
}