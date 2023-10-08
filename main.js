function comienzo(){
    alert("Bienvenidos! Los invitamos a interactuar con nosotros. La temática de hoy es calcular la edad de quienes quieran participar");
}

comienzo();
let ingreso= prompt(" Si desea continuar escriba 'aceptar' de lo contrario ingrese 'cancelar'");
if (ingreso != "aceptar"){
alert ("Gracias por su tiempo");
} else {
    alert ("¡COMENCEMOS!")
}

let nombre;
do {
    nombre = prompt("Por favor ingrese su nombre:");
} while (nombre === "" || nombre === null);
alert("Hola, " + nombre + ""+" comencemos!");

function resta() {
    var num1 = parseInt(prompt("Ingrese año actual: "));
    var num2 = parseInt(prompt("Ingrese año de nacimiento: "));
    var resultado = num1 - num2;
    alert("su edad es " + resultado + " años");
    return resultado;
}

console.log(resta());
// resta();
// alert("usted tiene" + resultado);


