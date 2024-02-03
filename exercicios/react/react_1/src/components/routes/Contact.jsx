import { Link } from "react-router-dom"

export default function Contact(){
    return(
        <>
            <h2>contact</h2>
            <p>
                <Link to='/contact/intagram'>contato 1</Link>
            </p>
            <p>
                <Link to='/contact/tiktok'>contato 2</Link>
            </p>
            <p>
                <Link to='/contact/linkedin'>contato 3</Link>
            </p>
        </>
    )
}