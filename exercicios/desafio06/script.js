main = document.getElementById('main')
minuto = document.getElementById('min')
segundo = document.getElementById('seg')
end = document.getElementById('end')
btn = document.getElementById('btn')

for(i=0; i<61; i++){
    minuto.innerHTML += '<option value="'+i+'">'+i+'</option>'
}

for(i=0; i<61; i++){
    segundo.innerHTML += '<option value="'+i+'">'+i+'</option>'
}


function start(){
    min = minuto.value
    seg = segundo.value
    
    end.childNodes[1].innerHTML = min+':'+seg

    intervalo = setInterval(function(){
        seg--
        if(seg<0){
            if(min>0){
                min--
                seg=59
            }else{
                alert('acabou')
                clearInterval(intervalo)
            }
        }
        end.childNodes[1].innerHTML = min+':'+seg
    },1000)
}