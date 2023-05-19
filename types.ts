
//Estos tipos servirán para que otras variables sean de este tipo de dato
type username = string;
type age = string | number;
type array=string[];

interface Base{
    id: number,
    name: username, //name es de tipo username (string)
    age: age,
    courses: array
}

let persona: Base = {
    id:123,
    name:"Daniel",
    age: 40,
    courses : ["Python","Java","JS"]    
}

console.log(persona)


