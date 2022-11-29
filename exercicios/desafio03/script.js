function clicar() {
    inicio = document.getElementById('iinicio')
    fim = document.getElementById('ifim')
    passo = document.getElementById('ipasso')
    res = document.getElementById("res")

   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `impossivel contar`
   } else {

    i = Number(inicio.value)
    f = Number(fim.value)
    p = Number(passo.value)
    res.innerHTML = `contando...`

    if (p <= 0) {
        alert('seu contador foi considerado como 1')
        p = 1
    }

    if (i < f) {
        for (c = i; c <= f; c += p) {
            res.innerHTML += `👉 ${c}`
        }
    } else {
        for (c = i; c >= f; c -= p) {
            res.innerHTML += `&#x1F449; ${c}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
   }
}
