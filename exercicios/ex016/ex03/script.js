function executar(){

    pedido = new XMLHttpRequest()

    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            dados = this.responseXML
            clientes = dados.getElementsByTagName("cliente")
            
            alert(clientes.length)
        }
    }

    pedido.open('GET', 'dados.xml', true)
    pedido.send()
}

