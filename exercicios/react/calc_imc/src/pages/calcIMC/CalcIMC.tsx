import { useState } from "react"
import CampForm from "@/components/CampForm"
import TabelaIMC from "@/components/TabelaIMC"
import Link from "next/link"

import { MdOutlineSaveAs } from "react-icons/md"

export default function CalcIMC() {
    const [peso, setPeso] = useState<any>()
    const [altura, setAltura] = useState<any>()
    const [IMC, setIMC] = useState<any>()

    function calcular() {
        let res = peso / (altura ** 2)
        setIMC(res.toFixed(2))
        console.log(IMC)
    }

    return (
        <div className="flex flex-col border border-zinc-800 outline-4 shadow-lg w-[400px] gap-5 px-1 rounded-md bg-zinc-300">
            <p className="w-full text-center font-bold text-lg">Cálculo do IMC</p>
            <CampForm label="peso:" state={peso} funcState={setPeso} />
            <CampForm label="altura:" state={altura} funcState={setAltura} />
            <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={calcular}>Calcular</button>

            <Link className="bg-indigo-900 text-white text-center mx-2 p-1 rounded-lg cursor-pointer" href={{
                pathname: '/DadosIMC/DadosIMC',
                query: {
                    p_peso: peso,
                    p_altura: altura,
                    p_IMC: IMC
                }
            }}><MdOutlineSaveAs className="mx-auto text-xl" /></Link>
            <p className="bg-zinc-100 p-1">Resultado: {IMC}</p>
            <TabelaIMC imc={IMC} />
        </div>
    )
}