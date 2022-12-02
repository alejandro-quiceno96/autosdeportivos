const open = document.getElementById('open-en');
const modal_contenedor = document.getElementById('modal_contenedor');
const close = document.getElementById('close-recu');

open.addEventListener('click', () =>{
    modal_contenedor.classList.add('showre');
});
 
close.addEventListener('click', () =>{
    modal_contenedor.classList.remove('showre');
});