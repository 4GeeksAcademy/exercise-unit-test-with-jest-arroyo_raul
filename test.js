// Importo las funciones desde app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

//Comienza tu primera prueba
test('adds 14 + 9 to equals 23', () => {
    //Dentro de la prueba llamamos a nuestra functión sum con 2 números
    let total = sum(14, 9);

    //Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


//EURO-DOLLAR
test("One euro should be 1.07 dollars", function () {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

//Prueba de euros negativos
test("Negative euros should be false", function () {
    const Negativedollars = fromEuroToDollar(-2);

    expect(Negativedollars).toBe(false);
});

//Prueba de euros en formato String
test("String dollars should be false", function() {
    const StringDollars = fromEuroToDollar('3');

    expect(StringDollars).toBe(false);
})


//DOLLAR-YEN
//Prueba de número positivo de dolar
test("5 dollars should be 731,30 yen", function() {
    const yens = fromDollarToYen(5);

    expect(yens).toBe(731.3084112149533);
});

//Prueba de número negativo de dolar
test("Negative dollar should be false", function() {
    const negativeYens = fromDollarToYen(-2);

    expect(negativeYens).toBe(false);
});

//Prueba de valor de dolar string
test("String value should be false", function() {
    const stringYens = fromDollarToYen('3');

    expect(stringYens).toBe(false);
});

//YEN-POUND
//Prueba de valor positivo de yens
test("1056 yens should be 5.870415335463258 pounds", function() {
    const pounds = fromYenToPound(1056);

    expect(pounds).toBe(5.870415335463258);
});

//Prueba de valor negativo de yens
test("Negative yens should be false", function() {
    const negativePounds = fromYenToPound(-2);

    expect(negativePounds).toBe(false);
});

//Prueba de valor string de yen
test("String yens should be false", function() {
    const stringPounds = fromYenToPound('5');

    expect(stringPounds).toBe(false);
});