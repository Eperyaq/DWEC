function darCarnet(numero, estudiando){

    let estudia;
    //Compruebo y hago la variable booleana si esta estudiando
    if(estudiando == "s" || estudiando =="si" || estudiando == "S" || estudiando == "Si"){
        estudia = true;
    }else{
        estudia = false;
    }

    //Compruebo que el numero este correcto.
    if(typeof(numero) !== "number" ||  numero <16 || numero >120){
        alert("Error, el numero debe estar entre 16-120")
    }


    //Comrpobamos edad y dependiendo de la edad que tenga lee damos un carnet u otro, o no le damos carnet.´

    if (estudia && numero > 0){ //Mayor que cero porque puedes meter un numero negativo y que aun asi te de el carnet, y eso está mal.

        console.log("Carnet otorgado: Carnet estudiante");

    } else if(numero >=16 && numero <= 25){

        console.log("Carnet recibido: Carnet joven.");

    } else if(numero >= 26 && numero <= 65){

        console.log("No se le ha otrogado carnet.");

    }else if(numero >= 66 && numero <= 120){

        console.log("Carnet otrogado: Carnet de la tercera edad");

    }
    
}

//Posibles entradas

darCarnet(102,"s"); // Entrega carnet estudiante

darCarnet(16,"n"); // Entrega carnet joven

darCarnet(27); // No entrega ningun carnet

darCarnet(66,"No"); // Entrega el carnet de la tercera edad

darCarnet(-2,"s") //Salta error
