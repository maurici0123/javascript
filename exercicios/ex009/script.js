num = document.getElementById('txtn')
res = document.getElementById('res')
vet = []

function vere() { 
    
    if (vet.indexOf(Number(num.value)) == -1) {
        com = vet.length
        vet.push(Number(num.value))
        res.innerHTML += `<p>num ${vet[com]}</p>`
        console.log(com)

    } else {
        alert('nao')
    }
}

