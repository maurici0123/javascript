textarea = document.getElementById('text')

function show() {

    const charWidth = 7; // Largura média de um caractere em pixels (ajuste conforme necessário)
    const textareaWidth = textarea.clientWidth; // Largura atual da textarea em pixels
    const newCols = Math.floor(textareaWidth / charWidth); // Calcula o novo valor de 'cols'

    textarea.setAttribute('cols', newCols); // Define o novo valor de 'cols'

    const cols = textarea.cols; // Obtém o atributo 'cols'
    console.log(cols)
}












// // Calcula o número de linhas atuais e o número de colunas permitidas
// const cols = textarea.cols;
// const lines = textarea.value.split('\n')

// // Verifica cada linha para ver se excede a largura do textarea
// lines.forEach((line, index) => {
//     if (line.length > cols) {
//         console.log(line)
//         console.log(`Quebra de linha suave detectada na linha ${index + 1}.`)
//     }
// })