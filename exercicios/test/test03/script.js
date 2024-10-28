// Função para entrar em tela cheia
function entrarEmTelaCheia() {
    const elemento = document.documentElement; // Seleciona o elemento que queremos colocar em tela cheia, aqui o documento inteiro
    if (elemento.requestFullscreen) {
        elemento.requestFullscreen();
    } else if (elemento.mozRequestFullScreen) { // Para Firefox
        elemento.mozRequestFullScreen();
    } else if (elemento.webkitRequestFullscreen) { // Para Chrome, Safari e Opera
        elemento.webkitRequestFullscreen();
    } else if (elemento.msRequestFullscreen) { // Para IE/Edge
        elemento.msRequestFullscreen();
    }
}

// Função para sair da tela cheia
function sairDaTelaCheia() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// Chamando a função ao clicar em um botão, por exemplo
document.getElementById("meuBotao1").onclick = entrarEmTelaCheia

document.getElementById("meuBotao2").onclick = sairDaTelaCheia