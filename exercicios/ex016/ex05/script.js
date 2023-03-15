$(document).ready(
    //function(){
        $('#btn').click(function(){
            $('#box').load('dados.txt #2', function(responseTxt, statusTxt, xhr){
                if(statusTxt == 'success')
                    alert('tudo certo')
                if(statusTxt == 'error')
                    alert('ERROR: '+xhr.status+': '+xhr.statusText
                    )
            })
        })
    //}
)