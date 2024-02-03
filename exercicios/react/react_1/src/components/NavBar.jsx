import { Link } from "react-router-dom"
import styles from './Icon.module.css'

export default function(){
    return(
        <nav>
            <ul className={styles.List}>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}