const openFileExplorerButton = document.querySelector('button'); // Botão para abrir o explorador

openFileExplorerButton.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    
    fileInput.addEventListener('change', (event) => {
        //console.log(event.target.files[0])

        const file = event.target.files[0];
        console.log(file);
        
        const blobURL = URL.createObjectURL(file)
        console.log(blobURL)
        //document.querySelector('img').src = blobURL; // Exibe a imagem selecionada
    });
    
    fileInput.click();
});
