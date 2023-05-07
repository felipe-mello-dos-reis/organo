import './Forms.css'
import TextField from '../TextField'
import ListaSuspensa from '../ListaSuspensa'
import Botão from '../Botão'
import { useState } from 'react'


const Forms = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log("Formulário submetido => ", nome, area, imagem, departamento)

        props.aoDocenteCadastrado({
            nome,
            area,
            imagem,
            departamento
        })
        setNome('')
        setArea('')
        setImagem('')
        setDepartamento('')
    }

    const [nome, setNome] = useState('')
    const [area, setArea] = useState('')
    const [imagem, setImagem] = useState('')
    const [departamento, setDepartamento] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do docente</h2>
                <TextField
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />

                <TextField
                    obrigatorio={true}
                    label='Área'
                    placeholder='Digite sua área de atuação'
                    valor={area}
                    aoAlterado={valor => setArea(valor)} />
                <TextField
                    obrigatorio={false}
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                obrigatorio={true}
                label="Departamento" 
                itens={props.departamentos} 
                valor={props.departamento}
                aoAlterado={valor => setDepartamento(valor)}
                />
                <Botão>Gerar card</Botão>
            </form>
        </section>
    )
}

export default Forms