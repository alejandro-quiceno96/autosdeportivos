const open = document.getElementById('registrarse-b');
const contenedor_modal = document.getElementById('contenedor_modal');
const close = document.getElementById('close');


open.addEventListener('click', () =>{
    contenedor_modal.classList.add('show');
});

close.addEventListener('click', () =>{
    contenedor_modal.classList.remove('show');
});

