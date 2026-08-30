import { useState } from 'react'
import { Header} from './components/header'
import { Formulario} from './components/formulario'
import {Aluno} from './components/aluno'
import './components/css/app.css'


export default function App(){
const[nomeAluno, setNomeAluno] = useState("")


const[idadeAluno, setIdadeAluno] = useState(0)

function cadastrarAluno(nome: string, idade: number) {
    setNomeAluno(nome)
    setIdadeAluno(idade)
}

    return(
        <div>
            <Header/>

            <Formulario cadastrarAluno={cadastrarAluno} />
            
            <Aluno nome={nomeAluno} idade={idadeAluno} />
        </div>
    )
}   