"use strict";
const sumOrConcat = (a, b) => typeof a === 'number' && typeof b === 'number' ? a + b
    : typeof a === 'string' && typeof b === 'string' ? a + b : new Error("Los parámetros deben ser números o strings");
console.log(sumOrConcat("5", "5"));
