import { useState } from 'react'
import styles from './Frase.module.css'

function Form(){

    function cadastrar(e){
        e.preventDefault()
        console.log(`o usuario ${name} se cadastrou com a senha ${password}`)
    }

    const [name, seTname] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h2 className={styles.Test}>cadastro</h2>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor='name'>nome: </label>
                    <input type='text' id='name' 
                    onChange={(e) => seTname(e.target.value)} 
                    placeholder='nome do usuario'></input>
                </div>
            
                <div>
                    <label htmlFor='password'>senha: </label>
                    <input type='password' id='password'
                    onChange={(e) => setPassword(e.target.value)}
                     
                    placeholder='senha do usuario'></input>
                </div>

                <input type='submit' value='cadastrar'></input>
            </form>
        </div>
    )
}

export default Form