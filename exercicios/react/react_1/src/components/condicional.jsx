import { useState } from "react"
import styles from './Frase.module.css'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmal, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    
    function Limpar(){
        setUserEmail('')
    }

    return(
        <div>
            <h1>condicional</h1>

            <form>
                <div>
                    <input type="email" placeholder="digite o email"
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit" onClick={enviarEmail}>envia-email</button>
                </div>
            </form>

            {userEmal &&(
                <div>
                    <p className={styles.Test}>o email do usuario é: {userEmal}</p>
                    <button onClick={Limpar}>limpar email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional