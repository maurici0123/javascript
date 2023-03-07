window.onload = function(){
    document.getElementById('btn').addEventListener('click', btn_click)
}

function btn_click(){
    //document.getElementById('box').innerHTML = 'ola'

    // objrto request
    pedido = new XMLHttpRequest()
   
    // comportamento do objeto 
    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById('box').innerHTML = this.responseText
        }else{
            document.getElementById('box').innerHTML = 'tente mais tarde' 
        }
    }

    // mandar pedido
    pedido.open('get', 'text.txt', true)
    //pedido.open('get', 'processar.php?n=joao&a=frota', true)

    // enviar pedido
    pedido.send()
}