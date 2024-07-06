import Globais from "@/components/Globais";
import Header from "@/components/Header";
import { useState } from "react";

export default function Inputs() {
    const cursos: string[] = ['', 'HTML+CSS', 'JavaScript', 'React', 'TypeScript', 'C++']
    const [nome, setNome] = useState<string>('')
    const [curso, setCurso] = useState<string>('')

    return (
        <main className='bg-stone-200'>
            <Header />
            <div className="container mx-auto bg-slate-100 h-screen text-center text-xl flex flex-col gap-5 pt-5">
                <div className="fieldInput">
                    <label htmlFor="inputNome">Nome: </label>
                    <input type="text" id="inputNome" onChange={(evt) => setNome(evt.target.value)} />
                </div>

                <div className="fieldInput">
                    <label htmlFor="inputCurso">Curso: </label>
                    <select id="inputCurso" onChange={(evt) => setCurso(evt.target.value)}>
                        {
                            cursos.map((curso, index) => <option key={index} value={curso}>{curso}</option>)
                        }
                    </select>
                </div>

                <p className="text-lg">Nome digitado:  {nome}</p>
                <p className="text-lg">Curso escolhido:  {curso}</p>
                
                <p>{Globais.Name}</p>
                <p>{Globais.City}</p>
                <p>{Globais.job}</p>
            </div>
        </main>
    )
}