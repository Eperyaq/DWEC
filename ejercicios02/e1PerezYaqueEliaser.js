function ejercicio1(num1,num2){

    let entero1 = parseInt(num1);
    let entero2 = parseInt(num2);

    let random = Math.random() * 10;

    let suma = entero1 + entero2 + random;


    return alert(suma.toFixed(2))//Redondea a los decimales que metas entre los parentesis
}


function ejercicio2(n){

     
    if (n <= 0) {
        return;
    }

    
    console.log("bauuuba");

    
    ejercicio2(n - 1);
}


function ejercicio3(){


    let array = [1,2,3,4,5];

    let filtrado = array.filter(num => num > 2);
    console.log("Numeros filtrados " + filtrado);

    let recoleccion = array.map(num => num *2);
    console.log("Numeros del array multiplicados x2 " + recoleccion);

}

function ejercicio5(){

    function Libro(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;

        this.resumen = function(){
            return(`${this.titulo}, escrito por ${this.autor}, tiene ${this.paginas} paginas.`);
        }
    }

    let libros = [
        new Libro("Cien años de soledad", "Gabriel García Márquez", 471),
        new Libro("1984", "George Orwell", 328),
        new Libro("El señor de los anillos", "J.R.R. Tolkien", 1178),
        new Libro("Crimen y castigo", "Fiódor Dostoyevski", 671),
        new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 863)
    ];

    libros.forEach(Libro => {
        console.log(Libro.resumen())
    });
}

function ejercicio6(numeros){

    let impares = numeros.filter(numero => numero % 2 == 1);

    let arrayNuevo = impares.map(num => num * 2);
  

    return console.log(arrayNuevo)

}

function ejercicio7(){

    class Animal{
        
        constructor(nombre, edad){
            this.nombre = nombre;
            this.edad = edad;
        }

        hablar(){
            return `${this.nombre} esta haciendo un sonido`;
        }

    }

    class Perro extends Animal{
        constructor(nombre,edad){
            super(nombre,edad);
        }

        hablar(){
            return `${this.nombre} hace Guau Guau!!`;
        }
    }

    class Gato extends Animal {
        constructor(nombre, edad) {
            super(nombre, edad); 
        }
    
        
        hablar() {
            return `${this.nombre} dice Miau!`;
        }
    }

    let perro = new Perro("Toby",4);
    console.log(perro.hablar());

    let gato = new Gato("misifus",2);
    console.log(gato.hablar());
}

function ejercicio8(){
    class Estudiante{
        constructor(nombre, edad, notas = []){
            this.nombre = nombre;
            this.edad = edad;
            this.notas = notas;
        }
    

        agregarNotas(notaNueva) {
            this.notas.push(notaNueva);
        }

        mostrarInfo(){
            return `El estudiante ${this.nombre}, tiene las siguientes notas: ${this.notas}`;
        }
    }
    let estudiante1 = new Estudiante("Elia",20,[7,7,5])

    console.log(estudiante1.agregarNotas(9));
    console.log(estudiante1.mostrarInfo());
}

function ejercicio10(){

    let mes = prompt("Introduzca un numero del 1-12")

    mes = parseInt(mes);
    
    if (mes <1 || mes >12 || isNaN(mes)){
        alert("Error, numero inválido")
    }else{
        switch (mes){
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
            case 11:
                alert("El mes tiene 31 dias!");
                break;
            case 2:
                alert("Febrero tiene 28 dias");
                break;
            case 4:
            case 6:
            case 8:
            case 10:
            case 12:
                alert("El mes tiene 30 dias");
                break
        }

    }
}

function ejercicio11(){

    

    let resultados = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    }

    for(let i = 0; i < 36000; i++){
        let dado = Math.floor(Math.random() *6) + 1; 

        resultados[dado]++;
    }

    console.log(resultados);
}


function ejercicio12(){

    function findPairs(num1, num2){

        let rango = [];

        if (isNaN(num1) || isNaN(num2)){
            alert("Error, dato invalido");
        }else{

            let inicio = Math.min(num1,num2);
            let final = Math.max(num1,num2);
    
            for (let i = inicio; i < final; i++) {
                
                if(i % 2 == 0){
                    rango.push(i);
                }
                
            }

            alert(`Los numeros pares de este rango son: ${rango}`);
        }

    }

    findPairs(1,10);

}

function ejercicio13(){

    class Objeto {
        constructor(nombre, precio){
            this.nombre = nombre;
            this.precio = precio;
        }
    }

    let objetos = [
        {nombre: "Manzana", precio: 2},
        {nombre: "Agua", precio: 1},
        {nombre: "Piña", precio: 3},
        {nombre: "Sandia", precio: 5}
    ];

    function calcularSumaPrecio(arrayObjetos){

        return arrayObjetos.reduce((suma,objeto) => suma + objeto.precio, 0); //El cero es el valor por el que empieza la suma
    }

    alert(calcularSumaPrecio(objetos));
}


function ejercicio14(){

    function isLeapYear(year1,year2){

         // Validar que los parámetros sean números
        if (isNaN(year1) || isNaN(year2)) {
            console.log("Por favor ingrese números válidos.");
            return;
        }

        // Validar que los años estén en el rango permitido
        if (year1 < 2001 || year1 > 2500 || year2 < 2001 || year2 > 2500) {
            console.log("Los años deben estar entre 2001 y 2500.");
            return;
        }

        // Ordenar los años para manejar cualquier orden de entrada
        let inicio = Math.min(year1, year2);
        let fin = Math.max(year1, year2);

        // Array para almacenar los años bisiestos
        let leapYears = [];

        // Comprobar cada año en el rango
        for (let year = inicio; year <= fin; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                leapYears.push(year);
            }
        }

        // Mostrar los resultados
        if (leapYears.length > 0) {
            console.log(`Los años bisiestos entre ${inicio} y ${fin} son: ${leapYears.join(", ")}`);
        } else {
            console.log(`No hay años bisiestos entre ${inicio} y ${fin}.`);
        }
    }

    isLeapYear(2020, 2032); // Los años bisiestos entre 2020 y 2032 son: 2020, 2024, 2028, 2032
    isLeapYear(2501, 2400); // Los años deben estar entre 2001 y 2500.
    isLeapYear(2015, 2021); // Los años bisiestos entre 2015 y 2021 son: 2016, 2020

}


function ejercicio16(){

    class Personaje {
        constructor(nombre, raza, nivel = 1, puntosDeVida = 100){
            this.nombre = nombre;
            this.raza = raza;
            this.nivel = nivel;
            this.puntosDeVida = puntosDeVida
        }

        atacar(enemigo){
            if(enemigo.puntosDeVida > 0){
                enemigo.puntosDeVida -= 10;

                if(enemigo.puntosDeVida < 0){
                    enemigo.puntosDeVida = 0; //Para evitar que el enemigo tenga -5 puntos de vida
                }

                if(enemigo.puntosDeVida > 0){
                    console.log(`${this.nombre} ataca a ${enemigo.nombre} y le inflingue 10 puntos de daño, este se queda con ${enemigo.puntosDeVida} puntos de vida!`)
                }else{
                    console.log(`${this.nombre} ataca a ${enemigo.nombre} y le inflingue 10 puntos de daño y lo mata!!`)
                }
                
            }
        }

        recuperarVida(){
            if(this.puntosDeVida >= 1){
                this.puntosDeVida += 20; // añade 20 puntos de vida

                if(this.puntosDeVida >= 80){
                    this.puntosDeVida = 100; //Para que no tenga vida extra
                }

                console.log(`${this.nombre} se cura y suma 20 puntos de vida, vida actual ${this.puntosDeVida}.`)
            }
            
        }

        subirNivel(){
            if(this.puntosDeVida == 0){

                this.nivel = 1;
                this.puntosDeVida = 100;

                console.log(`Nivel y vidas de ${this.nombre} restablecidos a 1 y 100 `)

            }
        }

    }

    let pj1 = new Personaje("Khenji", "Humano", 1,100);
    let pj2 = new Personaje("Loki","Elfo",1,5); // en este caso no le pongo valores porque estan por defecto

    let arrayPJ = [pj1,pj2];

    pj1.atacar(pj2);
    pj2.subirNivel();

}


function ejercicio17(){
    class Producto {
        constructor(nombre, categoria, precio, stock = 0){
            this.nombre = nombre;
            this.categoria = categoria;
            this.precio = precio;
            this.stock = stock;
        }

        actualizarStock(cantidad){
        
            if(isNaN(cantidad)){
                alert("Tipo de dato incorrecto.")
            }else{
                if(cantidad >0){
                    this.stock += cantidad;
                } else {
                    this.stock -= cantidad;
        
                    if(this.cantidad < 0 ){
                        cantidad = 0;
                    }
                }
            }
        }
    }

    class Inventario {
        
        constructor(){
            this.arrayProductos = [];
        }

        agregarProducto(producto){
            this.arrayProductos.push(producto);
        }

        eliminarProducto(nombreProducto){
            this.arrayProductos = this.arrayProductos.filter(producto => producto.nombre !== nombreProducto);
        }

        buscarProducto(nombreProducto){
            let productoSacado = this.arrayProductos.find(producto => producto.nombre == nombreProducto);
            console.log(`${productoSacado.nombre} cuesta ${productoSacado.precio} euros, su categoria es ${productoSacado.categoria}  y ahora mismmo hay ${productoSacado.stock} en stock.`)
            
            
        }
    }
    

    let prod1 = new Producto("papas","Comida",2,3);
    let prod2 = new Producto("salchicha","Comida",3,2);
    


    let invent = new Inventario();
    invent.agregarProducto(prod1);
    invent.agregarProducto(prod2);
    console.log(invent.arrayProductos);


    //invent.eliminarProducto("papas");
    console.log(invent.buscarProducto("salchicha"))

}


function ejercicio18(){

    function calcularPrecioFinal(precioBase, descuentos) {
        if (typeof precioBase !== 'number' || precioBase <= 0) {
            console.log("El precio base debe ser un número positivo.");
        }

        descuentos.forEach(descuento => {
            if (typeof descuento !== 'number' || descuento < 0 || descuento > 100) {
                console.log("Cada descuento debe estar en el rango de 0 a 100.");
            }
        });
    
        let precioFinal = precioBase;
        descuentos.forEach(descuento => {
            precioFinal -= precioFinal * (descuento / 100);
        });
    
        return precioFinal;
    }


    function mostrarPrecioFinal(precioBase, descuentos) {
        try {
            let precioFinal = calcularPrecioFinal(precioBase, descuentos);
            console.log(`El precio final después de aplicar los descuentos es: ${precioFinal.toFixed(2)}`);
        } catch (error) {
            console.error(error.message);
        }
    }


    let precioBase = 100;
    let descuentos = [10, 20]; // 10% y luego 20%

    mostrarPrecioFinal(precioBase, descuentos);
}
ejercicio18()