import GridDados from "@/components/GridDados"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function DadosIMC() {
    const [nome, setNome] = useState<any>('')
    const [data, setData] = useState<any>('')
    const [dados, setDados] = useState<any[]>([])

    const { p_peso = '', p_altura = '', p_IMC = '' } = useRouter().query

    useEffect(() => {
        const storedData = localStorage.getItem('dados')
        if (storedData) {
            setDados(transformObject(storedData))
        }
        //localStorage.clear()

        const date = new Date()
        //const hora = date.getHours() + ':' + date.getMinutes()
        const dia = date.toLocaleDateString()

        //setData(hora + '-' + dia)
        setData(dia)
    }, [])

    function transformObject(obj: any) {
        return JSON.parse(obj)
    }

    function gravar() {
        const id = crypto.randomUUID()
        const res = {
            nome: nome,
            peso: p_peso,
            altura: p_altura,
            IMC: p_IMC,
            data: data,
            id: id
        }

        setDados(prevDados => {
            const updatedDados = [res, ...prevDados]
            localStorage.setItem('dados', JSON.stringify(updatedDados))
            return updatedDados
        })
        setNome('')

        const t = localStorage.getItem('dados')
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
                            console.log(dados)
                            return (
                                < GridDados key={e.id} nome={e.nome} peso={e.peso} altura={e.altura} IMC={e.IMC} data={e.data} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}