interface Base{
    id: number;
}

interface Persona extends Base{
    nombre:string;
    edad:number;
}

//Debe integrar todas la funcionalidades de la interfaz Persona
let nuevaPersona: Persona ={
    nombre:"Luis",
    edad:20,
    id: 1
}