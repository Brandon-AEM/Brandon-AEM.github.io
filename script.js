console.log("¡La página web se ha cargado!");
const myImage = document.getElementById('myImage');

myImage1.addEventListener('click', () => {
    alert('Imagen 1 seleccionada!');
    // You could change the image source here:
    // myImage.src = 'image2.jpg';
});
myImage.addEventListener('mouseover', () => {
    myImage.style.cursor = 'pointer';
});
myImage.addEventListener('mouseout', () => {
    myImage.style.cursor = 'default';
});
// Puedes añadir interactividad aquí más adelante
// Por ejemplo, mostrar una alerta al hacer clic en el título:
/*
const miTitulo = document.querySelector('h1');
if (miTitulo) {
    miTitulo.addEventListener('click', () => {
        alert('¡Hiciste clic en el título!');
    });
}
*/

const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function rotateImages() {
    // Elimina la clase 'active' de todas las imágenes
    images.forEach((img) => img.classList.remove('active'));

    // Agrega la clase 'active' a la imagen actual
    images[currentIndex].classList.add('active');

    // Incrementa el índice y reinicia si llega al final
    currentIndex = (currentIndex + 2) % images.length;
}

// Inicia la rotación cada 5 segundos
setInterval(rotatemyImage1, 5000);

// Marca la primera imagen como activa al cargar la página
rotateImages();