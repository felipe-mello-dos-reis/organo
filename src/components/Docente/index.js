import './Docente.css'

const Docente= ( { nome, imagem, area, corDeFundo} ) => {
    return(
        <div className='docente'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{area}</h5>
            </div>
        </div>
    )


}


export default Docente