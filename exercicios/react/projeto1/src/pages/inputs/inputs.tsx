import Header from "@/components/Header";
import { useState } from "react";

export default function Inputs() {
    const [nome, setNome] = useState<string>('')
    const [curso, setCurso] = useState<string>('')

    return (
        <main className='bg-stone-200'>
            <Header />
            <div className="container mx-auto bg-slate-100 px-5 h-screen text-center text-xl flex flex-col gap-5 pt-5">
                <div className="fieldInput">
                    <label htmlFor="inputNome">Nome: </label>
                    <input type="text" id="inputNome" onChange={(evt) => setNome(evt.target.value)} />
                </div>

                <div className="fieldInput">
                    <label htmlFor="inputCurso">Curso: </label>
                    <select id="inputCurso" onChange={(evt) => setCurso(evt.target.value)}>
                        <option value=""></option>
                        <option value="HTML+CSS">HTML+CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="C++">C++</option>
                    </select>
                </div>

                <p className="text-lg">Nome digitado:  {nome}</p>
                <p className="text-lg">Curso escolhido:  {curso}</p>
            </div>
        </main>
    )
}