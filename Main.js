const btnCierra = document.querySelector('#btn-cierra');
const btnAdelante = document.querySelector('#btn-adelante');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#Galeria img');
const lightbox = document.querySelector('#Contenedor-Principal')
const Imagenactiva = document.querySelector('#Img-activa');
let indiceImagen=0;



const abreLightbox =(event)=>{
    Imagenactiva.src = event.target.src;
    lightbox.style.display ='flex';
    indiceImagen=Array.from(imagenes).indexOf(event.target)
};

imagenes.forEach((Imagen)=>{
    Imagen.addEventListener('click',abreLightbox)
});


btnCierra.addEventListener('click',()=>{
    lightbox.style.display ='none';

});
const adelantaImagen = () =>{
    if(indiceImagen=== imagenes.length -1){
        indiceImagen = -1;
    }
    Imagenactiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};
btnAdelante.addEventListener('click', adelantaImagen);


const retrocedeImagen =()=>{
    if(indiceImagen ===0){
        indiceImagen = imagenes.length;
    }
    Imagenactiva.src = imagenes[indiceImagen -1].src;
    indiceImagen--;
};
btnRetrocede.addEventListener('click', retrocedeImagen);