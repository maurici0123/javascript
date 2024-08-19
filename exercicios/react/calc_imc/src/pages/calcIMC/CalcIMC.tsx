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
        <div className="flex flex-col w-[400px] gap-5 px-1 rounded-md">
            <CampForm label="peso:" state={peso} funcState={setPeso} />
            <CampForm label="altura:" state={altura} funcState={setAltura} />
            <button className="bg-indigo-900 text-white mt-5 mx-2 p-1 rounded-lg cursor-pointer font-semibold text-lg hover:scale-105 transition-transform" onClick={calcular}>Calcular</button>

            <Link className="bg-indigo-900 text-white text-center mx-2 p-1 rounded-lg cursor-pointer hover:scale-105 transition-transform" href={{
                pathname: '/DadosIMC/DadosIMC',
                query: {
                    p_peso: peso,
                    p_altura: altura,
                    p_IMC: IMC
                }
            }}><MdOutlineSaveAs className="mx-auto text-2xl h-7" /></Link>
            <p className="text-center text-xl">Resultado:</p>
            <p className="text-center text-resolution font-bold text-4xl mt-[-15px]">{IMC}</p>
            <TabelaIMC imc={IMC} />
        </div>
    )
}