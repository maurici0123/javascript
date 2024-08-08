import { useState } from "react"
import CompForm from "@/components/CompForm"
import TabelaIMC from "@/components/TabelaIMC"

export default function CalcIMC() {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [IMC, setIMC] = useState(0)

    function calcular() {
        let res = peso/(altura**2)
        setIMC(res)
        console.log(IMC)
    }

    return (
        <div>
            <p>Cálculo do IMC</p>
            <CompForm label="peso" state={peso} funcState={setPeso} />
            <CompForm label="altura" state={altura} funcState={setAltura} />
            <button onClick={calcular}>Calcular</button>
            <p>Resultado: {IMC}</p>
            <TabelaIMC />
        </div>
    )
}