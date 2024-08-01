import Header from "@/components/Header"
import { useState, useEffect } from "react"


let carros = [{categ: ''}]

function iserirCarro(c: any, l: any) {
    l.push(
        <div className="flex flex-row w-[500px] mb-3" key={c.id}>
            <div className="w-full">{c.categ}</div>
            <div className="w-full">{c.valor}</div>
            <div className="w-full">{c.modelo}</div>
        </div>
    )
}

export default function Filtragem() {
    const [linhas, setLinhas] = useState<any[]>([])

    useEffect(()=>{
        fetch('http://127.0.0.1:1880/carros')
        .then(response => response.json())
        .then(response =>{
            carros = response
        })
    },[])

    function criarLinhas(categ: string) {
        let l: object[] = []

        carros.forEach((c:any) => {
            if (c.categ == categ) {
                iserirCarro(c, l)
            }
        })

        if (categ == 'Todos') {
            carros.forEach((c) => {
                iserirCarro(c, l)
            })
        }
        setLinhas(l)
    }

    return (
        <main className='bg-stone-200'>
            <Header />
            <div className="container mx-auto bg-slate-100 h-screen text-xl flex flex-col items-center gap-5 pt-5">
                <div className="fieldInput">
                    <label>Selecione a categoria</label>
                    <select onChange={(evt) => criarLinhas(evt.target.value)}>
                        <option value=''>Nenhum</option>
                        <option value='Esporte'>Esporte</option>
                        <option value='SUV'>SUV</option>
                        <option value='Utilitario'>Utilitario</option>
                        <option value='Todos'>Todos</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row w-[500px] mb-3 font-semibold">
                        <div className="w-full">Ctegoria</div>
                        <div className="w-full">Valor</div>
                        <div className="w-full">Modelo</div>
                    </div>
                    {linhas}
                </div>
            </div>
        </main>
    )
}