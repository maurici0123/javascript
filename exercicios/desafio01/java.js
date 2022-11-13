img = document.getElementById('image')
hora = document.getElementById('time')
x = new Date()
h = x.getHours()

if (h >= 6 && h <= 12){
    img.src= 'image/image-dia.jpg'
    hora.innerHTML = `agora são ${h} horas.`
    document.body.style.background = '#9CB5DB'
}else if (h > 12 && h <= 18){
    img.src= 'image/image-tarde.jpg'
    hora.innerHTML = `agora são ${h} horas.`
    document.body.style.background = '#A54C3D'
}else{
    img.src= 'image/image-noite.jpg'
    hora.innerHTML = `agora são ${h} horas.`
}