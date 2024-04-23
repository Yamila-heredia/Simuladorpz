function crearusuario(){
    alert("Bienvenido a nuestro banco movil");
    alert("Por favor ingresa tus datos para darte de alta");

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let usuario = prompt("Ingrese un usuario");
    let contraseña = prompt("Ingrese una contraseña");


    alert("HOLAA :)");

    let user = prompt("Ingrese usuario");
    let pass = prompt("Ingrese contraseña");

    if (user === usuario  && pass === contraseña) {
        alert("Hola " + user + " bienvenido a InversBanc");
        
    } else {
        alert("Este usuario no existe. Por favor, inténtalo de nuevo.");
        crearusuario();
    }
}

crearusuario();

let intentos = 1;

while (intentos <= 5 ) {

    let montoinicial = parseInt(prompt("Ingrese el monto inicial a depositar"));
    if (!montoinicial) {
        alert("Por favor, ingrese el monto inicial.");
        continue; 
    }

    let diasdelplazo = parseInt(prompt("Ingresa la cantidad de días de duración de su plazo fijo: 30 / 45 / 65"));
    if (!diasdelplazo) {
        alert("Ingrese la cantidad de día del plazo fijo:  ")
        continue;
    }

    let R, interesganado, montofinal;

    if (diasdelplazo === 30){
         interesganado = montoinicial * 0.15;
         montofinal = interesganado + montoinicial;
            alert("El monto final de tu investion es de:" + montofinal);
            break;
    } else if (diasdelplazo === 45){ 
         interesganado = montoinicial * 0.45;
         montofinal = interesganado + montoinicial;
            alert("El monto final de tu investion es de:" + montofinal);
            break;
    } else if (diasdelplazo === 65){
         interesganado = montoinicial * 0.65;
         montofinal = interesganado + montoinicial;
            alert("El monto final de tu investion es de:" + montofinal);
            break;
    } else {
    alert ( "Por el momento no disponemos simulación para el número ingresado");
    break;
    }
}
console.warn("Usted supero el máximo de intentos permitidos de simulación por hoy. Veulva a intentarlo mañana");








    
    

            