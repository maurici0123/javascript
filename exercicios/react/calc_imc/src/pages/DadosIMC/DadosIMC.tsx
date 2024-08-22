import GridDados from "@/components/GridDados"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { FaRegSave } from "react-icons/fa"

export default function DadosIMC() {
    const [nome, setNome] = useState<any>('')
    const [data, setData] = useState<any>('')
    const [dados, setDados] = useState<any[]>([])

    const get_deleted_data = (obj: any) => {
        setDados(() => {
            localStorage.setItem('dados', JSON.stringify(obj))
            return obj
        })
    }

    const { p_peso = '', p_altura = '', p_IMC = '' } = useRouter().query

    useEffect(() => {
        const storedData = localStorage.getItem('dados')
        if (storedData) {
            setDados(transformObject(storedData))
        }
        //localStorage.clear()

        const date = new Date()
        setData(date.toLocaleDateString())
    }, [])

    function transformObject(obj: any) {
        return JSON.parse(obj)
    }

    function record() {

        if (p_IMC == '') {
            
        } else {
            const id = crypto.randomUUID()
            const obj = {
                nome: nome,
                peso: p_peso,
                altura: p_altura,
                IMC: p_IMC,
                data: data,
                id: id
            }

            setDados(prevDados => {
                const updatedDados = [obj, ...prevDados]
                localStorage.setItem('dados', JSON.stringify(updatedDados))
                return updatedDados
            })
            setNome('')
        }
    }

    return (
        <div className="h-screen flex bg-zinc-100">
            <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-2/4 2xl:w-1/3 flex flex-col m-auto mt-[15%]">
                <div>
                    <div className="campoForm">
                        <label className="font-semibold">Nome</label>
                        <input className="inputDados shadow-md bg-transparent" value={nome} onChange={evt => setNome(evt.target.value)} />
                    </div>
                    <div className="campoForm">
                        <label className="font-semibold">Peso(Kg)</label>
                        <input className="inputDados shadow-md" type="text" disabled value={p_peso} />
                    </div>
                    <div className="campoForm">
                        <label className="font-semibold">Altura(m)</label>
                        <input className="inputDados shadow-md" type="text" disabled value={p_altura} />
                    </div>
                    <div className="campoForm">
                        <label className="font-semibold">IMC</label>
                        <input className="inputDados shadow-md" type="text" disabled value={p_IMC} />
                    </div>
                    <div className="campoForm">
                        <label className="font-semibold">Data</label>
                        <input className="inputDados shadow-md" disabled value={data} />
                    </div>
                    <button className="buttonDados hover:scale-105 transition-transform" onClick={record}><FaRegSave className="mx-auto text-xl" /></button>
                </div>

                <div className="grid">
                    <div className="gridLinhaTitulo text-sm sm:text-base">
                        <div className="gridTitulo text-sm sm:text-base">Nome</div>
                        <div className="gridTitulo text-sm sm:text-base pl-1">Peso</div>
                        <div className="gridTitulo text-sm sm:text-base">Altura</div>
                        <div className="gridTitulo text-sm sm:text-base">IMC</div>
                        <div className="gridTitulo text-sm sm:text-base">Data</div>
                    </div>
                    <div className="gridLinhaDados">
                        {
                            dados.map((e: any) => {
                                return (
                                    < GridDados key={e.id} id={e.id} nome={e.nome} peso={e.peso} altura={e.altura} IMC={e.IMC} data={e.data} enviarFuncao={get_deleted_data} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}