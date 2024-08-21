interface CompFormProps{
    label: string
    state: any
    funcState: any
}

export default function CampForm(props: CompFormProps) {
    return(
        <div className="flex mx-2">
            <label className="w-[60px] pt-2 text-lg">{props.label}</label>
            <input className="border-b-2 border-zinc-700 bg-transparent p-1 pl-5 w-full focus:outline-0 focus:shadow-xl" type="text" onChange={(evt) => props.funcState(evt.target.value)}/>
        </div>
    )
}