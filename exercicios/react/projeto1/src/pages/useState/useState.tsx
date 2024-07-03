import Header from "@/components/Header"
import { useState } from "react"
import DisplyState from "@/components/DisplyState"

export default function UseState() {
    const [cont, setCont] = useState<number>(0)

    return (
        <main className='bg-stone-200'>
            <Header />
            <div className="container mx-auto bg-slate-100 px-5 h-screen text-center text-2xl flex flex-col gap-5 pt-5">
                <h1>UseState</h1>
                <DisplyState valor={cont} setValor={setCont}/>
            </div>
        </main>
    )
}