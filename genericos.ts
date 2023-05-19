//Usando genéricos en funciones

//Recibirá cualquier tipo de dato 
function testGenerico<T>(item: T): T{
    return item
}

console.log(testGenerico<string>("Hola mundo"))

function mapeo<K,V>(llave: K,value: V) {
    return {
        llave,
        value
    };
}

console.log(mapeo<Number,String>(1,"Luis"))