function SeuNome({setNome}){
    return(
        <>
        <p>digite seu nome</p>
        
        <input type="text" placeholder="qual o seu nome?"
        onChange={(e) => setNome(e.target.value)}></input>
        </>
    )
}

export default SeuNome