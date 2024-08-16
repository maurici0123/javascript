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

    return (
        <div className="flex flex-col justify-center m-auto w-6/12 mt-[15%]">
            <div>
                <div className="campoForm">
                    <label>Nome</label>
                    <input className="inputDados" value={nome} onChange={evt => setNome(evt.target.value)} />
                </div>
                <div className="campoForm">
                    <label>Peso(Kg)</label>
                    <input className="inputDados" type="text" disabled value={p_peso} />
                </div>
                <div className="campoForm">
                    <label>Altura(m)</label>
                    <input className="inputDados" type="text" disabled value={p_altura} />
                </div>
                <div className="campoForm">
                    <label>IMC</label>
                    <input className="inputDados" type="text" disabled value={p_IMC} />
                </div>
                <div className="campoForm">
                    <label>Data</label>
                    <input className="inputDados" disabled value={data} />
                </div>
                <button className="buttonDados" onClick={record}><FaRegSave className="mx-auto text-xl"/></button>
            </div>

            <div className="grid">
                <div className="gridLinhaTitulo">
                    <div className="gridTitulo">Nome</div>
                    <div className="gridTitulo">Peso</div>
                    <div className="gridTitulo">Altura</div>
                    <div className="gridTitulo">IMC</div>
                    <div className="gridTitulo">Data</div>
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
    )
}