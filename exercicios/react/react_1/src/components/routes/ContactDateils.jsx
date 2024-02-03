import { useParams, useNavigate } from "react-router-dom"

export default function ContactDateils(){

    const {id} = useParams()
    const navigate = useNavigate()

    function ContactSent(){
        console.log(`enviado: ${id}`)
        return navigate('/')
    }

    return(
        <>
            <p>contato: {id}</p>
            <button onClick={ContactSent}>enviar</button>
        </>
    )
}