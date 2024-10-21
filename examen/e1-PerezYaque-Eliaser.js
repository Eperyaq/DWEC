
let tempCelsius = parseInt(prompt("Introduzca una temperatura en grados Celsius"));
let tempAConvertir = prompt("a que temperatura lo quieres pasar a Fahrenheit o a Kelvin?").toLocaleLowerCase();

//Realizamos la comprobación de datos para ver que todo esté correcto
if(tempAConvertir == "fahrenheit" && !isNaN(tempCelsius) || tempAConvertir == "kelvin" && !isNaN(tempCelsius)){

    if (tempAConvertir == "fahrenheit"){

        let fahrenheitTemp = (tempCelsius * 9 / 5) + 32; //realizamos la conversión y la mostramos
        console.log(`El resultado de el cambio de ${tempCelsius} Celsius a Fahrenheit es ${fahrenheitTemp}`);

    }else if(tempAConvertir == "kelvin"){

        let kelvinTemp = tempCelsius + 273.15; //realizamos la conversión y la mostramos
        console.log(`El resultado de el cambio de ${tempCelsius} Celsius a kelvin es ${kelvinTemp}`);
    }
}else{
    //Controlamos los errores mostrando un alert.
    alert("Error, ha introducido un dato incorrecto");
}

