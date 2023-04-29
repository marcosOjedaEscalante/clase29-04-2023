var btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', function(){
    var cajaUno = document.querySelector('#cajaUno');
    var cajaDos = document.querySelector('#cajaDos');
    var chxUno = document.querySelector('#chxUno');

    /* replaceAll - trimStart - trimEnd */
    console.log(cajaUno.value);
    console.log(cajaDos.value);

    /* replaceAll */
    /* cambiar "esto" por "esta cadena de caracteres" */
    

    /* Interpolación */
    /* Al apretar el botón la página pediremos el nombre mediante un prompt y 
    dicho nombre hay que agregarlo
    a la cadena actualizada */
    var nombre = prompt('Ingresa tu nombre');
    cajaUno.value = cajaUno.value.replaceAll('esto', `esta cadena de caracteres ${nombre}`);
    console.log(cajaUno.value);

});
/* template string - back ticks*/