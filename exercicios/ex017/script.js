window.onload = function(){
    document.getElementById('onload').innerHTML = 'site carrsgado'
}


document.getElementById('click').addEventListener("click", function(){
    let div = document.getElementById('click')
    this.style.backgroundColor = 'pink'
})


hover = document.getElementById('hover')
hover.addEventListener('mouseenter', function(){
    hover.style.border = '5px solid darkgreen'
})
hover.addEventListener('mouseout', function(){
    hover.style.border = '5px solid lightgreen'
})


select = document.getElementById('select').addEventListener('change', function(){
    x = document.getElementById("select").value;
    document.getElementById("p").innerHTML = "voce selecionou: " + x
})


document.getElementById('blur').addEventListener('blur', function(){
    x = document.getElementById('blur')
    x = x.style.color = 'red'
})


document.getElementById('keyup').addEventListener('keyup', function(){
    x = document.getElementById("keyup")
    x.value = x.value.toUpperCase()
})

document.getElementById('keypress').addEventListener('keypress', function(){
    x = document.getElementById("keypress")
    x.style.fontWeight = 'bold'
})