
function ejercicio1(){

    let cadena = "Hola soy una cadena.";
    let entero = 12;
    let booleano = true;

    console.log(typeof cadena);
    console.log(typeof entero);
    console.log(typeof booleano);

    console.log("Convirtiendo numero entero a cadena...");

    entero = entero.toString();

    console.log(typeof entero);

}

//Ejercicio2: 
/*
sacarlo a la hoja de estilos, ya lo tengo sacado por eso no lo hago.
*/

function ejercicio3(){

    let num1 = 1;
    let num2 = 4;

    console.log("Suma = " + num1+num2);
    console.log("resta = " + (num2-num1));
    console.log("multi = " + num1*num2);
    console.log("division = " + num1/num2);

    console.log("numero antes " + num1+ " incrementado " + ++num1);
}


function ejercicio4(){

 
    let cadena = "123";
    let entero = 2;

    let suma = cadena + entero;

    console.log(suma);
    //se han pegado como si concatenara el string con el int.
 
}


function ejercicio5(){

    let num1 = 2;
    let num2= 3;

    console.log(num1 > num2);
    console.log(num1 < num2);
    console.log(num1 == num2);
    console.log(num1 != num2);

    let resultado1;
    let resultado2;
    let resultado3; 

    if(num1 && num2 == num2 && num1){
        resultado1 = true;
    } else{
        resultado1 = false
    }

    if(num1 || num2 == num1){
        resultado2 = true;
    } else {
        resultado2 = false;
    }

    if(!num1 == num2){
        resultado3 = true;
    }else{
        resultado3 = false;
    }

    console.log(
        resultado1, resultado2, resultado3
    );

}

function ejercicio6(){

    let num = prompt("Introduzca un numero:");

    if (num > 0){
        alert("Numero positivo");
    }else if(num < 0){
        alert("Numero negativo");
    } else if(num== 0){
        alert("Numero igual a 0");
    }
}

function ejercicio8(){
    let edad = prompt("Introduzca edad:");

    if (edad> 18 && edad < 25){
        alert("Tienes entre 18 y 25");
    }else if(edad < 18){
        alert("Menor de 18");
    } else{
        alert("Mayor de 18");
    }
}


function ejercicio9(){
    let edad = prompt("introduzca edad: ");
    let nacionalidad = prompt("Introduzca nacionalidad:").toLowerCase();

    if (edad >= 18 && nacionalidad == "española"){
        alert("Puedes votar");
    }else{
        alert("No puedes votar");
    }
}

function ejercicio10(){
    let num = 0;

    while (num<=100){
        console.log(num);
        num++;
    }
}

function ejercicio11(){
    let numero = prompt("Introduzca un numero (negativo si quiere parar)")

    while(numero > 0){
        numero = prompt("Introduzca un numero (negativo si quiere parar)")

    }
}

function ejercicio12(){
    let contraseña = "1234";
    let contra;

    do{
        contra = prompt("Introduzca contraseña hasta acertar")
    }while(contra != contraseña)
    
    alert("acertaste!")
}

function ejercicio13(){

    let controlador = true;
    let num; 
    while (controlador){
        num = prompt("introduzca un numero");

        if (!isNaN(num)){
            controlador = false;
            alert("Numero valido");
        }else{
            alert("Numero inválido pruebe de nuevo");
        }
    }


}

function ejercicio14(){
    let num = prompt("Introduzca un numero:");

    if (num %2 == 1){
        alert("Numero impar")
    }else{
        alert("Numero par")
    }
}

function ejercicio15(){

    var num1 = 5;
    var num2 = 8;

    if (num2 < num1){
        alert("Nuero1 no es mayor que numero2")
    }

    if (num2 >= 0){
        alert("Numero2 es positivo")
    }

    if (num1 < 0 ){
        alert("Numero1 es negativo o distinto de cero")
    }

    if (num1++ >= num2){
        alert("incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
    }

}


function ejercicio17(){

    let conteo = 0; // Contador para las edades mayores o iguales a 18

    for (let i = 1; i <= 5; i++) {
        let edad = prompt(`Introduce tu edad (intento ${i}/5):`);

        // Convierte la entrada a un número
        edad = parseInt(edad);

        // Verifica si la entrada es un número
        if (!isNaN(edad)) {
            // Incrementa el contador si la edad es mayor o igual a 18
            if (edad >= 18) {
                conteo++;
            }
        } else {
            alert("Error: La entrada no es un número. Inténtalo de nuevo.");
            i--; // No incrementar el contador de intentos si hay un error
        }
    }

    alert(`Has introducido una edad mayor o igual a 18, ${conteo} veces.`);

}


function ejercicio18(){

    let numero = prompt("Introduce un número entero de varios dígitos:");

    
    if (isNaN(numero) || !/^\d+$/.test(numero)) {
        alert("Error: Debes introducir un número entero válido.");
        return; 
    }

    let suma = 0; 

    
    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]); 
    }

    
    alert("La suma de los dígitos es: " + suma);
    
}

function ejercicio20(){

    let texto = prompt("Introduce una cadena de texto:");

 
    let textoLimpiado = texto.replace(/\s+/g, '').toLowerCase();

    
    let textoInvertido = textoLimpiado.split('').reverse().join('');

    
    if (textoLimpiado === textoInvertido) {
        alert("La cadena es un palíndromo.");
    } else {
        alert("La cadena NO es un palíndromo.");
    }
}

ejercicio20();