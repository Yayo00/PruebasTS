class Car{
    
    private color: String;
    private marca: String;
    private static modelo: String;

    constructor(color:string,marca:string, modelo:string){
        this.color = color;
        this.marca = marca;
        Car.modelo = modelo;
    }

    arrancar():string {
        return "Run run!";
    }

    frenar():string {
        return "Frenando";
    }

    get getModelo(): String{
        return Car.modelo;
    }

    get getMarca():String{
        return this.marca;
    }

    get getColor():String{
        return this.color;
    }

    set setColor(color:string){
        this.color = color;
    }

    set setMarca(marca:string){
        this.marca=marca;
    }
    set setModelo(modelo:string){
        Car.modelo = modelo;
    }
}

let carro1: Car = new Car("verde","Ford","2000");
console.log(carro1)
console.log(carro1.getMarca)
console.log(carro1.arrancar())
console.log(carro1.frenar())

console.log(carro1.getModelo)

carro1.setColor= "gris";

console.log(carro1.getColor)