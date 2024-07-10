
// Función para iniciar el test
function iniciarTest() {
    opcionRespuesta = [1,2,3];
    preguntas = [
        "¿Que cantidad de tus ingresos estas dispuesto a invertir?",
        "¿Que plazo de tiempo buscar invertir tus ingresos?",
        "¿En caso que tus inversión caiga, que acción tomarias?"
    ];
    preguntasOpc = [
        [   "\n1) 25% de mis ingresos",
            "2) 50% de mis ingresos",
            "3) 75% de mis ingresos"],
        [   "\n1) Menos de 6 meses",
            "2) Menos de 1 año",
            "3) Más de 1 año"],
        [   "\n1) Retirar mi inversión ",
            "2) No tomaria acción",
            "3) Aumentar mi inversión"]
    ]
    respuesta = [];

for (var i = 0; i < preguntas.length; i++) {

    //mensaje += opciones.join("\n");
    var respuestaUsuario = prompt(preguntas[i]+=preguntasOpc[i].join("\n"));
    respuesta.push(parseInt(respuestaUsuario));
}

var perfilInversor = calcularTestInversor(respuesta);
alert("Tu perfil de inversor es: " + perfilInversor);

}

function calcularTestInversor(respuesta){

   var perfilInversor;
   var sumaRespuesta = 0;

   for(var i = 0; i < respuesta.length;i++){ 
     sumaRespuesta +=  respuesta[i];
   }

   if (sumaRespuesta <= 3){
    perfilInversor = "Conservador";
   }else if(sumaRespuesta > 3 && sumaRespuesta <=6){
            perfilInversor = "Moderado";
   }else{
    perfilInversor = "Agresivo";
   }

    return perfilInversor;
}
