// 1.-
var precioOriginal = 100;
var porcentajeDescuento = 20;

var descuento = precioOriginal * (porcentajeDescuento / 100);

var precioFinal = precioOriginal - descuento;

console.log("Precio final despues del descuento: $" + precioFinal);

// 2.-

var subTotal = 80;
var porcentajePropina = 15;
var porcentajeDescuento = 10;

var propina = subTotal * (porcentajePropina / 100);

var totalConPropina = subTotal + propina;

if (porcentajeDescuento > 0){
    var descuento = totalConPropina *( porcentajeDescuento / 100);
    totalConPropina -= descuento;
}

console.log("Total de la factura con propina y descuento:$" + totalConPropina);

// 3.-

var edad = 30;

var diasVividos = edad * 365; //el valor de los años no es exacto, por si las moscas

console.log("Dias vividps hasta ahora:" + diasVividos);