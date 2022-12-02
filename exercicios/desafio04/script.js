function gerar() {
    number = document.getElementById('txtn')
    tab = document.getElementById('itab')

    if (number.value.length == 0) {
        alert('por favor digite um número')
    } else {
        tab.style.display = 'block'
        n = Number(number.value)
        c = 1
        tab.innerHTML = ''
        while (c <= 20) {
            item = document.createElement('option')
            item.text += `${n} X ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}