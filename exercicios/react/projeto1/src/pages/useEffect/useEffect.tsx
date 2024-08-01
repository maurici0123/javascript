import Header from "@/components/Header";
import { useState, useEffect } from "react";

export default function Useeffect() {
    const [cont, setCont] = useState<number>(0)
    const [aux, setAux] = useState<number>(0)
    
    useEffect(() => {
        alert('aux foi alterado!')
    })

    function adicionarAux() {
        setAux(prevAux => prevAux+1)
    }

    return (
        <main className='bg-stone-200'>
            <Header />
            <div className="container mx-auto bg-slate-100 h-screen text-center text-2xl flex flex-col gap-5 pt-5">
                <h1>UseEffect</h1>

                <div>
                    <p>{`valor do cont: ${cont}`}</p>
                    <p>{`valor do aux: ${aux}`}</p>
                    <button className="button mt-7" onClick={adicionarAux}>Add 1</button>
                </div>
            </div>
        </main>
    )
}