import './TextField.css'

const TextField = (props) => {

    // let valor = ''



    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        
    }


    const placeholderModificada =`${props.placeholder}...`
    // $ serve para concatenar, lembre de usar acento grave
    return (
        <div className="text-field">
            <label>{props.label}</label> 
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default TextField