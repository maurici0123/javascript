<?php

    if(isset($_GET['n']) and isset($_GET['a'])){

        $nome = $_GET['n']
        $apelido = $_GET['a']
        $frase = "bem vindo ao servidor $nome $apelido"
        echo $frase
    }

?>