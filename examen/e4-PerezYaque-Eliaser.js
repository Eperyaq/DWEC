function sumarArrays(array1, array2){

    //Compruebo si la longitud de ambos arrays son iguales para añadir o dejar como estan los arrays
    if(array1.length == array2.length){
        console.log("Hola");
        let array3 = array1.reduce((array1,array2) => array1 + array2);
        console.log(array3);
    }else{
        console.log("Adios");
    }

}

let array1 = ["1€","8€","3€","4€","5€"];
let array2 = ["1€","7€","3€","4€","5€"];

sumarArrays(array1,array2);