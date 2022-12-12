img = document.getElementById('image')
hora = document.getElementById('time')
x = new Date()
h = x.getHours()
y = new Date()
m = y.getMinutes()

if (h == 0) {

    img.src= 'image/image-noite.jpg'
    hora.innerHTML = `agora é meia noite e ${m} minutos.`
}else if (h ==1) {

    img.src= 'image/image-noite.jpg'
    hora.innerHTML = `agora é ${h} hora e ${m} minutos.`
}else if (h >= 6 && h <= 12){

    img.src= 'image/image-dia.jpg'
    hora.innerHTML = `agora são ${h} horas e ${m} minutos.`
    document.body.style.background = '#9CB5DB'
}else if (h > 12 && h <= 18){

    img.src= 'image/image-tarde.jpg'
    hora.innerHTML = `agora são ${h} horas e ${m} minutos.`
    document.body.style.background = '#A54C3D'
}else{

    img.src= 'image/image-noite.jpg'
    hora.innerHTML = `agora são ${h} horas e ${m} minutos.`
}