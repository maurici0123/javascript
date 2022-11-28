function clicar() {
    inicio = document.getElementById('iinicio')
    fim = document.getElementById('ifim')
    passo = document.getElementById('ipasso')
    res = document.getElementById("res")

    comeco = Number(inicio.value)
    final = Number(fim.value)
    cont = Number(passo.value)

    while (comeco <= final) {
        res.innerHTML = comeco
        comeco += cont
    }
}
