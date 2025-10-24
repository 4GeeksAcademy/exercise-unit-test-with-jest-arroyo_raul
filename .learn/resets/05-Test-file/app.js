// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

//Solo un registro en consola para nosotros
console.log(sum(7, 3));

//Exporta la función para usarla en otros archivos
module.exports = { sum };