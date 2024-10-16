/*
let persona = {
    nombre : "elia",
    edad : 20,
    ciudad: "cádiz",
    saludo: function() {
        console.log(`Hola soy ${this.nombre}`);
    }
};

function MostrarPersona(persona){
    console.log(`${persona.nombre} tiene ${persona.edad} años y es de ${persona.ciudad}`);
}

console.log(MostrarPersona(persona));
persona.saludo();


let array = [1,2,3,4,5,6,7,8,9,10];


let duplicados = array.map(num => num *2);
console.log("Duplicados" + duplicados);

let pares = array.filter(numeros => numeros % 2 == 0);
console.log("Pares " + pares);

let sumaPares = pares.reduce((acc, num) => acc + num, 0);
console.log("Suma de pares " + sumaPares);

*/


function ej1(num1, num2){


    numero1 = parseInt(num1);
    numero2 = parseInt(num2);


    if(!isNaN(num1) && !isNaN(num2)){
        
        let suma = num1 + num2

        console.log(suma);

        if(!isNaN(suma)){
            console.log(suma.toFixed(2));
        }else{
            console.log("Error al calcular la suma, numero no válido")
        }
        

    }else{
        console.log("Error, eso no es un numero");
    }

}
//ej1("1.242","abd");


function ej2(n){

    if(n < 0 ){
        return;
    }

    console.log("Baubaa");

    ej2(n -1 )
}

//ej2(3);

function ej3(){
    let array = [1,2,3,4,5];

    let filtrado = array.filter(num => num % 2 == 1)
    console.log("Numeros impares filtrados " + filtrado);

    let reduccion = array.reduce((acumulador, actual) => acumulador + actual, 0)
    console.log("Reduccion " + reduccion);

    let recoleccion = array.map(numero => numero * 2);
    console.log("Multiplicados " + recoleccion);
}
//ej3()


function ej4(){
    let matriz = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ];
                 
    function aplanar(){
        let matrizAplanada = [];

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz.length; j++) {
                matrizAplanada.push(matriz[i][j]);
                
            }
        }
        
        let sumita = matrizAplanada.reduce((acumulador, actual) => acumulador + actual, 0)
        console.log("Suma " + sumita);

        return matrizAplanada;
    }
    
    console.log(aplanar());
}
//ej4();

function ej5(){

    class Libro{
        constructor(titulo, autor, paginas){
            this.titulo = titulo;
            this.autor = autor;
            this.paginas = paginas;

        }

        resumen(){
            console.log(`libro ${this.titulo} creado por ${this.autor} que tiene ${this.paginas} paginas`)
        }
    }

    let arrayLibros = [
        new Libro("Cien años de soledad", "Gabriel García Márquez", 471),
        new Libro("1984", "George Orwell", 328),
        new Libro("El señor de los anillos", "J.R.R. Tolkien", 1178),
        new Libro("Crimen y castigo", "Fiódor Dostoyevski", 671),
        new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 863)
    ];
    
    arrayLibros.forEach(libro => {
        libro.resumen();
    });

    
}
//ej5();


function ej6(){

    function fyt(array){

        return array.filter(num => num % 2 == 1).map( num => num * 2);

    }

    console.log(fyt([1,2,3,4,5,6,7,8,9]));
}
//ej6();

function ej7(){
    class Animal{
        constructor(nombre, edad){
            this.nombre = nombre;
            this.edad = edad;
        }
    
        HacerRuido(){}
    }
    
    class Perro extends Animal{
    
        HacerRuido(){
            console.log("Guau");
        }
    }

    class Gato extends Animal{
        constructor(nombre, edad, cola) {
            // Llamar al constructor de la clase padre
            super(nombre, edad);
            this.cola = cola; // Definir la propiedad específica de Gato
        }
        HacerRuido(){
            console.log("Miau y tengo " + this.cola);
        }
    }
    
    let perrete = new Perro("Rookie", 12);
    perrete.HacerRuido();

    let gerrete = new Gato("paco", 12, "cola");
    gerrete.HacerRuido();



}

ej7();