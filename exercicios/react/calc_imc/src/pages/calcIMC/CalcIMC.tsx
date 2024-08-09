import { useState } from "react"
import CampForm from "@/components/CampForm"
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
        <div className="flex flex-col border border-black w-[300px] gap-5">
            <p className="w-full text-center bg-zinc-400 font-bold text-lg">Cálculo do IMC</p>
            <CampForm label="peso" state={peso} funcState={setPeso} />
            <CampForm label="altura" state={altura} funcState={setAltura} />
            <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={calcular}>Calcular</button>
            <p className="bg-zinc-100 p-1">Resultado: {IMC.toFixed(2)}</p>
            <TabelaIMC imc={IMC}/>
        </div>
    )
}