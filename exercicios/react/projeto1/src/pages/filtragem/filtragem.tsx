import Header from "@/components/Header"
import { useState } from "react"


const carros = [
    { id: 0, categ: 'Esporte', valor: '120000.00', modelo: 'Golf GTI' },
    { id: 1, categ: 'Esporte', valor: '200000.00', modelo: 'Camaro' },
    { id: 2, categ: 'SUV', valor: '100000.00', modelo: 'HRV' },
    { id: 3, categ: 'SUV', valor: '100000.00', modelo: 'T-Cross' },
    { id: 4, categ: 'Utilitario', valor: '180000.00', modelo: 'Hillux' },
    { id: 5, categ: 'Utilitario', valor: '160000.00', modelo: 'Ranger' },
    { id: 6, categ: 'Esporte', valor: '150000.00', modelo: 'Mustang' },
    { id: 7, categ: 'Esporte', valor: '220000.00', modelo: 'Porsche 911' },
    { id: 8, categ: 'SUV', valor: '120000.00', modelo: 'Renegade' },
    { id: 9, categ: 'SUV', valor: '130000.00', modelo: 'Compass' },
    { id: 10, categ: 'Utilitario', valor: '170000.00', modelo: 'Amarok' },
    { id: 11, categ: 'Utilitario', valor: '140000.00', modelo: 'Frontier' },
    { id: 12, categ: 'Esporte', valor: '180000.00', modelo: 'Audi TT' },
    { id: 13, categ: 'Esporte', valor: '250000.00', modelo: 'Corvette' },
    { id: 14, categ: 'SUV', valor: '110000.00', modelo: 'Creta' },
    { id: 15, categ: 'SUV', valor: '105000.00', modelo: 'Kicks' },
    { id: 16, categ: 'Utilitario', valor: '165000.00', modelo: 'S10' },
    { id: 17, categ: 'Utilitario', valor: '175000.00', modelo: 'L200' },
    { id: 18, categ: 'Esporte', valor: '230000.00', modelo: 'Ferrari 488' },
    { id: 19, categ: 'Esporte', valor: '190000.00', modelo: 'BMW Z4' }
]

function iserirCarro(c: any, l: any) {
    l.push(
        <div className="flex flex-row w-[500px] mb-3" key={c.id}>
            <div className="w-full">{c.categ}</div>
            <div className="w-full">{c.valor}</div>
            <div className="w-full">{c.modelo}</div>
        </div>
    )
}

export default function filtragem() {
    const [linhas, setLinhas] = useState<any[]>([])

    function criarLinhas(categ: string) {
        let l: object[] = []

        carros.forEach((c) => {
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