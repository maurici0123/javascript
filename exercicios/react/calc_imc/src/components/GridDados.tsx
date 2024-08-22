import { IoIosCloseCircleOutline } from "react-icons/io";

interface GridDadosProps {
    id: string
    nome: string
    peso: any
    altura: any
    IMC: any
    data: string
    enviarFuncao: (mensagem: any) => void;
}

export default function GridDados(props: GridDadosProps) {

    function transformObject(obj: any) {
        return JSON.parse(obj)
    }

    function deleteDados(id: any) {
        const storedData = localStorage.getItem('dados')
        if (storedData) {
            const arrayDados = transformObject(storedData)

            arrayDados.map((obj: any) => {
                if (obj.id === id) {
                    arrayDados.splice(arrayDados.indexOf(obj), 1)
                    props.enviarFuncao(arrayDados)
                }
            })
        }
    }

    return (
        <div className="gridLinhas text-sm sm:text-base">
            <div className="gridLinha break-words">{props.nome}</div>
            <div className="gridLinha pl-1">{props.peso}Kg</div>
            <div className="gridLinha">{props.altura}m</div>
            <div className="gridLinha">{props.IMC}</div>
            <div className="flex justify-around sm:gap-6 lg:gap-10">{props.data} <IoIosCloseCircleOutline className="text-xl text-zinc-500 sm:mt-[2px] hover:text-red-500 cursor-pointer" values={props.id} onClick={() => deleteDados(props.id)} /></div>
        </div>
    )
}