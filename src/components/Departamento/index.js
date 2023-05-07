import Docente from '../Docente'
import './Departamento.css'

const Departamento = (props) => {
    const css = { backgroundColor: props.corSecundaria}

    return(
        (props.docentes.length > 0) ? <section className='departamento' style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='docentes'>

            {props.docentes.map( docente => <Docente
            key={docente.nome}
            nome={docente.nome}
            area={docente.area}
            imagem={docente.imagem}
            corDeFundo={props.corPrimaria}
            />)}

            </div>
        </section>
        : ''
    )
}

export default Departamento