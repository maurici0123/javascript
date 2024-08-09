interface CompFormProps{
    label: string
    state: any
    funcState: any
}

export default function CampForm(props: CompFormProps) {
    return(
        <div className="flex mx-2">
            <label className="w-[60px]">{props.label}</label>
            <input className="border p-1 w-full rounded-lg" type="text" onChange={(evt) => props.funcState(evt.target.value)}/>
        </div>
    )
}