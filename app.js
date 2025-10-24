// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

//Solo un registro en consola para nosotros
console.log(sum(7, 3));

function fromDollarToYen(dolar) {
    if(dolar < 0) return false
    else if(typeof dolar == 'string') return false
    else return (dolar / 1.07) * 156.5;
}

console.log(fromDollarToYen(5));

function fromEuroToDollar(euro) {
    if(euro < 0) return false
    else if(typeof euro == 'string') return false
    else return euro * 1.07;
}

function fromYenToPound(yen) {
    if(yen < 0) return false
    else if(typeof yen == 'string') return false
    else return (yen / 156.5) * 0.87;
}

console.log(fromYenToPound(1056));

//Exporta la función para usarla en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };