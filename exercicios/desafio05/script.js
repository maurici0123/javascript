 num = document.querySelector('input#fnum')
 lista = document.querySelector('select#flista') 
 res = document.querySelector('div#res')
 valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && inlista(num.value, valores)) {
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function vereficar() {
    if (valores.length == 0) {
        alert('adicione um valor primeiro')
    } else {
        tot = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0

        for (pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
        }
        for (pos in valores) {
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>temos ${tot} valores cadastrados</p>`
        res.innerHTML += `<p>o maior numero é ${maior}</p>`
        res.innerHTML += `<p>o menor numero é ${menor}</p>`
        res.innerHTML += `<p>a soma dos numeros é ${soma}</p>`
        res.innerHTML += `<p>a media dos numeros é ${media}</p>`

    }
}