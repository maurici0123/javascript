window.onload = function(){
    document.getElementById('btn').addEventListener('click', btn_click)
}

function btn_click(){
    //document.getElementById('box').innerHTML = 'ola'

    // objrto request
    pedido = new XMLHttpRequest()

    // comportamento do objeto 
    pedido.onreadystatechange = function(){
        document.getElementById('box').innerHTML = this.responseText
    }

    pedido.open('get', 'text.txt', true)
    pedido.send()
}