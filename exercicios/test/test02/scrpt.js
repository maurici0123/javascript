const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    console.log(file)
    const blobURL = URL.createObjectURL(file);
    document.querySelector('img').src = blobURL;
})