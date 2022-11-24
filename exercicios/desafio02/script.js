function verificar(){

    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[erro] verifique seus dados')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
            if (fsex[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'image/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'image/foto-jovem-m.png')

            } else if (idade < 51) {
                img.setAttribute('src', 'image/foto-adulto-m.png')

            } else {
                img.setAttribute('src', 'image/foto-idoso-m.png')

            }

        } else if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'image/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'image/foto-jovem-f.png')

            } else if (idade < 51) {
                img.setAttribute('src', 'image/foto-adulto-f.png')

            } else {
                img.setAttribute('src', 'image/foto-idoso-f.png')

            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}