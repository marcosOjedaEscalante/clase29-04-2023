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

    /* expresiones regulares */
    /* En la caja dos, todo texto que se incorpore se debe cambiar de mayúscula a minúscula
    o viceversa */
    var regexUno = new RegExp(/[afd]/, 'gi');
    var regexDos = /a/gi;

    cajaDos.value = cajaDos.value.replaceAll(regexUno, function(match){
            /* return match === 'a' ? 'A' : 'a'; */
        
        if(match === 'a'){
            return 'A';
        }else if(match === 'A'){
            return 'a';
        }else if(match === 'd'){
            return 'D';
        }else if(match === 'D'){
            return 'd';
        }else if(match === 'f'){
            return 'F';
        }else if(match === 'F'){
            return 'f';
        }
    });

    /* trimStart . trimEnd */
    cajaUno.value = cajaUno.value.trimEnd();
    cajaUno.value = cajaUno.value.trimStart();

    cajaUno.value = cajaUno.value.trim();


});
/* template string - back ticks*/