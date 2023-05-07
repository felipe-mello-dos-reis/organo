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

  const [docentes, setDocentes] = useState([
    { nome: 'Francisco Alex Correia Monteiro', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/alex.jpg', area: 'Estruturas de aço e pontes', departamento: 'Departamento de Estruturas e Edificações'},
    { nome: 'Eliseu Lucena Neto ', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/eliseu.jpg', area: 'Estruturas', departamento: 'Departamento de Estruturas e Edificações'},
    { nome: 'Flávio Mendes Neto', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/flavio.jpg', area: 'Estruturas de Concreto', departamento: 'Departamento de Estruturas e Edificações'},
    { nome: 'João Cláudio Bassan de Moraes', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/jota.jpg', area: 'Materiais de construção civil', departamento: 'Departamento de Estruturas e Edificações'},
    { nome: 'Maryangela Geimba Lima', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/maryangela.jpg', area: 'Materiais', departamento: 'Departamento de Estruturas e Edificações'},
    { nome: 'Sérgio Gustavo Ferreira Cordeiro', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/sergio.jpg', area: 'Estruturas', departamento: 'Departamento de Estruturas e Edificações'},

    { nome: 'Cláudia Azevedo Pereira', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/claudia.jpg', area: 'Pavimentação', departamento: 'Departamento de Geotecnia'},
    { nome: 'Delma de Mattos Vidal', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/delma.jpg', area: 'Geotecnia', departamento: 'Departamento de Geotecnia'},
    { nome: 'Dimas Betioli Ribeiro', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/dimas.jpg', area: 'Métodos Computacionais em Geotecnia', departamento: 'Departamento de Geotecnia'},
    { nome: 'Flávio Massayuki Kuwajima', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/massayuki.jpg', area: 'Geotecnia', departamento: 'Departamento de Geotecnia'},
    { nome: 'Paulo Scarano Hemsi', imagem: 'https://uploaddeimagens.com.br/images/004/456/974/full/paulohemsi.jpg?1683496881', area: 'Geotecnia e Meio Ambiente', departamento: 'Departamento de Geotecnia'},
    { nome: 'Paulo Ivo Braga de Queiroz', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/pi.jpg', area: 'Métodos Quantitativos para Meio Ambiente', departamento: 'Departamento de Geotecnia'},
    { nome: 'Régis Martins Rodrigues', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/regis.jpg', area: 'Pavimentos', departamento: 'Departamento de Geotecnia'},
    { nome: 'José Antonio Schiavon', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/schiavon.jpg', area: 'Geotecnia e geossintéticos', departamento: 'Departamento de Geotecnia'},


    { nome: 'Eduardo Moraes Arrau', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/arraut.jpg', area: 'Modelagem ambiental', departamento: 'Departamento de Recursos Hídricos e Saneamento Ambiental'},
    { nome: 'Marcio Antonio da Silva Pimentel ', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/marcio.jpg', area: 'Instalações Prediais e Saneamento', departamento: 'Departamento de Recursos Hídricos e Saneamento Ambiental'},
    { nome: 'Roberto Gonçalves de Carvalho', imagem: 'https://uploaddeimagens.com.br/images/004/456/984/full/roberto.jpg?1683497466', area: 'Hidráulica', departamento: 'Departamento de Recursos Hídricos e Saneamento Ambiental'},
    { nome: 'Wilson Cabral de Sousa Júnior', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/wilson.jpg', area: 'Meio ambiente', departamento: 'Departamento de Recursos Hídricos e Saneamento Ambiental'},

    { nome: 'Alessandro Vinícius Marques de Oliveira', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/alessandro.jpg', area: 'Economia e Econometria do Transporte Aéreo', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Anderson Ribeiro Correia', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/anderson.jpg', area: 'Aeroportos e Logística', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Cláudio Jorge Pinto Alves', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/claudiojorge.jpg', area: 'Aeroportos e Marketing', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Evandro José da Silva', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/evandro.jpg', area: 'Projeto de Aeroportos', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Giovanna Miceli Ronzani Borille', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/giovanna.jpg', area: 'Arquitetura e Aeroportos', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Marcelo Xavier Guterres', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/guterres.jpg', area: 'Pesquisa Operacional e Simulação', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Mauro Caetano de Souza', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/mauro caetano.jpg', area: 'Inovações em Transporte Aéreo', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Mayara Condé Rocha Murça', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/mayara.jpg', area: 'Tráfego Aéreo', departamento: 'Departamento de Transporte Aéreo'},
    { nome: 'Rogéria de Arantes Gomes Eller', imagem: 'http://www.civil.ita.br/pessoal/colaboradores/rogeria.jpg', area: 'Economia', departamento: 'Departamento de Transporte Aéreo'},


  ])

  const aoNovoDocenteAdicionado = (docente) => {
    //debugger // set breakpoint
    setDocentes([...docentes, docente])
  }

  console.log(docentes)
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
        nomeDepartamento={departamento.nome}
        docentes={docentes.filter(docente => docente.departamento === departamento.nome)}
      />)}
    </div>
  );
}

export default App;
