import GridDados from "@/components/GridDados"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const array: any = []

export default function DadosIMC() {
    const [nome, setNome] = useState<any>('')
    const [data, setData] = useState<any>('')
    const [dados, setDados] = useState<any[]>([])

    const { p_peso='', p_altura='', p_IMC='' } = useRouter().query

    useEffect(() => {
        const date = new Date()
        const hora = date.getHours() + ':' + date.getMinutes()
        const dia = date.toLocaleDateString()

        setData(hora + '-' + dia)
    }, [])

    function transformObject(obj: any) {
        return JSON.parse(obj)
    }

    function gravar() {
        const id = String(Math.random())
        const res = {
            nome: nome,
            peso: p_peso,
            altura: p_altura,
            IMC: p_IMC,
            data: data,
            id: id
        }
        localStorage.setItem(id, JSON.stringify(res))

        array.push(id)
        setDados([...array])
        setNome('')
        console.log(nome)
    }

    return (
        <div className="flex flex-col justify-center m-auto w-6/12 mt-[15%]">
            <div>
                <div className="campoForm">
                    <label>Nome</label>
                    <input className="inputDados" value={nome} onChange={evt => setNome(evt.target.value)} />
                </div>
                <div className="campoForm">
                    <label>Peso</label>
                    <input className="inputDados" type="text" disabled value={p_peso} />
                </div>
                <div className="campoForm">
                    <label>Altura</label>
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
                <button className="buttonDados" onClick={gravar}>Gravar</button>
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
                            const dadoString = localStorage.getItem(e)
                            const dadoObjeto = transformObject(dadoString)

                            return (
                                < GridDados key={dadoObjeto.id} nome={dadoObjeto.nome} peso={dadoObjeto.peso} altura={dadoObjeto.altura} IMC={dadoObjeto.IMC} data={dadoObjeto.data} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}