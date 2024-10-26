const fileInput = document.querySelector('input');
fileInput.addEventListener('change', (event) => {
    console.log(event)

    const file = event.target.files[0];
    console.log(file)

    const blobURL = URL.createObjectURL(file);
    console.log(blobURL)

    document.querySelector('img').src = blobURL;
})




// const urlInput = document.querySelector('input[type="text"]'); // Campo de texto para a URL da imagem
// const imgElement = document.querySelector('img');

// urlInput.addEventListener('change', async (event) => {
//     const imageURL = event.target.value; // Pega a URL da imagem online
//     try {
//         // Faz um fetch para obter a imagem
//         const response = await fetch(imageURL);
        
//         // Verifica se a resposta está ok
//         if (!response.ok) throw new Error('Erro ao carregar imagem');

//         // Converte a resposta para um Blob
//         const blob = await response.blob();

//         // Cria uma URL Blob a partir do Blob
//         const blobURL = URL.createObjectURL(blob);

//         // Define a URL Blob no elemento <img>
//         imgElement.src = blobURL;
//     } catch (error) {
//         console.error('Erro:', error);
//         alert('Não foi possível carregar a imagem. Verifique a URL.');
//     }
// });
