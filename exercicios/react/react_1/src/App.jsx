import './App.css';
import HelloWorld from './components/HelloWorld';
import MyName from './components/MyName';
import Pessoa from './components/Pessoa';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import SeuNome from './components/SeuNome';
import { useState } from 'react'; 
import Saudacao from './components/Saudacao';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './components/Icon.module.css'
import { Outlet } from "react-router-dom"
import NavBar from './components/NavBar';


function App() {

  const prof = 'engenheiro'
  
  const [nome, setNome] = useState()

  return (
    <div className="App">
      
      <HelloWorld/>
      <hr />

      <MyName nome='mau' idade='25' hobby='programar'/>
      <hr />

      <Pessoa
      nome='carlos'
      idade='56'
      profissão={prof}/>
      <hr />

      <Evento/>
      <hr />

      <Form/>
      <hr />

      <Condicional/>
      <hr />

      <h1>state lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
      <hr />

      {/* o router nao funciona */}
      <h1>router</h1>
      <NavBar />
      <Outlet />
      <hr />

    <footer>
      <ul className={styles.List}>
        <li><FaFacebook/></li>
        <li><FaGithub/></li>
        <li><FaLinkedin/></li>
      </ul>
    </footer>
    <hr />

    </div>
  );
}

export default App;