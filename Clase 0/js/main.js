// esto es un comentario
//alert("Hola Mundo!"); // salida con mensaje


//variables
/* let mensaje="Hola a todos, estamos en el curso de javascripts!";//definir una variable con texto(dato)
alert(mensaje); //mostrar una alerta con el contenido de la variable(salida)
console.log("holis, que haces?");*/



// Modifico el contenido de mi encabezado con JS
let encabezado = document.getElementById("curso");
encabezado.innerHTML = "Curso de JavaScript...";
encabezado.className = "text-white bg-black";
