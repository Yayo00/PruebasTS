//Es un conjunto de types

interface Base{
    id: number;
}

interface Persona{
    name: string;
}

//El empleado será de tipo Base y Persona
type Employee = Base & Persona;

let manager: Employee={
    id: 12,
    name:"Luis"
}