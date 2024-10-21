class Persona{
    //Constructor para poder crear una instancia de la clase.
    constructor(nombre, tipo,experiencia,vidas) {
        //Compruebo los tipos de datos.
        if(typeof(nombre) == "string" && typeof(tipo) == "string" && typeof(experiencia) == "number" && typeof(vidas) == "number"){
            this.nombre = nombre;
            this.tipo = tipo;
            this.experiencia = 0;
            this.vidas = vidas;
        }else{
            alert("Los datos que has introducido son incorrectos.");
        }
        
    }

    enfrentarMonstruo(nivel){
        //Compruebo si la vida del pj es cero ya que si es asi no puede pelear.
        if(this.vidas == 0){
            return;
        }

        if(nivel >= 0 && nivel <= 100){
            
            let numAleatorio = (Math.floor(Math.random() * 100)) + 1;

            if(numAleatorio < nivel){
                this.vidas -= 1

                if(this.vidas <= 0){ // le indico esto para que no tenga vida negativa
                    this.vidas = 0;
                }
            }else if(numAleatorio >= nivel){
                this.experiencia += nivel; //Sube su experiencia el nivel del monstruo
            }

        }else{
            //Controlo los errrores
            alert("Error, el nivel del monstruo debe estar en el rango 0-100");
        }
    }

    mostrarInfo(){
        return console.log(`${this.nombre} es de tipo ${this.tipo} su experiencia es de ${this.experiencia} y tiene ${this.vidas} puntos de vida.`);
    }
}

//Posibles ejemplos
let personaje1 = new Persona("elia","Humano",0,0);

personaje1.enfrentarMonstruo(50); 
personaje1.mostrarInfo()


personaje1.enfrentarMonstruo(10); 
personaje1.mostrarInfo()

personaje1.enfrentarMonstruo(70); 
personaje1.mostrarInfo()

personaje1.enfrentarMonstruo(90);
personaje1.mostrarInfo()

personaje1.enfrentarMonstruo(100);  
personaje1.mostrarInfo() 
//Si al monstrar la informacion se queda en 0 o no aumenta respecto al ultimo combate la experiencia significa que ha perdido el combate.
