import './App.css'
import { useState } from 'react';

const API = 'https://opencep.com/v1/'

function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState('')
  const [displayDate, setDisplayDate] = useState('none')
  const [displayComple, setDisplayComple] = useState('none')

  const requisição = () => {
    if (cep != '') {

      fetch(API + cep)

        .then(r => {
          if (r.ok != true) {
            alert('cpf não encontrado!')
            return

          } else {

            r.json()
              .then((dados) => {
                setData(dados)
                setDisplayDate('block')

                if (data.complemento) {
                  setDisplayComple('block')
                } else {
                  setDisplayComple('none')
                }
              })
          }
        })
    }

  }

  return (
    <>
      <div className='container'>
        <input type="text" placeholder='CEP' required
          onChange={e => setCep(e.target.value)} />

        <button onClick={() => requisição()}>Buscar</button>

        <div className='datas' style={{ 'display': displayDate }}>

          <p> <h4>BAIRRO :</h4> {data.bairro ? ` ${data.bairro}` : ''}</p>

          <p> <h4>LOUGRADOURO :</h4> {data.logradouro ? ` ${data.logradouro}` : ''}</p>

          <p style={{ 'display': displayComple }}> <h4>COMPLEMENTO :</h4> {data.complemento ? ` ${data.complemento}` : ''}</p>

          <p>
            <h4>LOCALIDADE :</h4>
            <sapn>{` ${data.localidade}`}</sapn>
            <span className='uf'>{data.uf}</span>
          </p>

        </div>
      </div>
    </>
  )
}

export default App