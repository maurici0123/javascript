function executar(){

    pedido = new XMLHttpRequest()

    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            dados = this.responseXML
            clientes = dados.getElementsByTagName("cliente")
            conteudo = ''
            
            for(let i=0; i<clientes.length; i++){
                conteudo += '<p>nome: '+ clientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +'</p>'
                conteudo += '<p>contato: '+ clientes[i].getElementsByTagName("contato")[0].childNodes[0].nodeValue +'</p>'
                conteudo += '<hr>'
            }

            document.getElementById('caixa1').innerHTML = conteudo
        }
    }

    pedido.open('GET', 'dados.xml', true)
    pedido.send()
}

