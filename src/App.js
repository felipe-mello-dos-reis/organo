import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Forms from './components/Forms';
import Departamento from './components/Departamento';

function App() {

  const departamentos = [
    {
      nome: 'Departamento de Estruturas e Edificações',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Departamento de Geotecnia',
      corPrimaria: '#82CFFA',
      // corSecundaria: '#E8F8FF'
      corSecundaria: '#d6f3ff'
    },
    {
      nome: 'Departamento de Recursos Hídricos e Saneamento Ambiental',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Departamento de Transporte Aéreo',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]
  /*
  #d6b6ebf
  #fae9f5

  #A6D157
  #F0F8E2

  #ff8a29
  #ffeedf
  */

  const [docentes, setDocentes] = useState([])

  const aoNovoDocenteAdicionado = (docente) => {
    //debugger // set breakpoint
    setDocentes([...docentes, docente])
  }

  return (
    <div className="App">
      <Banner />
      <Forms
        departamentos={departamentos.map(departamentos => departamentos.nome)} aoDocenteCadastrado={docente => aoNovoDocenteAdicionado(docente)}
      />
      {departamentos.map(departamento => <Departamento
        key={departamento.nome}
        nome={departamento.nome}
        corSecundaria={departamento.corSecundaria}
        corPrimaria={departamento.corPrimaria}
        docentes={docentes.filter(docente => docente.departamento === departamento.nome)}
      />)}
    </div>
  );
}

export default App;
