
num1 = 20
num2 = 7;

mensaje = (`El resultado de la suma es:  ${(num1 + num2)}`);
document.write(`<h1>${mensaje}</h1>`);


 num3 = 5;
 num4 = 20;


mensaje = (`El resultado de la resta es:  ${(num4 - num3)}`);
document.write(`<h1>${mensaje}</h1>`);


num5 = 5;
num6 = 60;

mensaje = (`El resultado de la multiplicación es:  ${(num5 * num6)}`);
document.write(`<h1>${mensaje}</h1>`);

num7 = 5;
num8 = 2;

mensaje = (`El resultado de la división real es:  ${(num7 / num8)}`);
document.write(`<h1>${mensaje}</h1>`);

num9 = 25 ;
num10 = 5;


mensaje = (`El resultado de la división entera es:  ${(num9 / num10)}`);
document.write(`<h1>${mensaje}</h1>`);

document.write(`<h1>Resto de la división</h1>`)
var dividendo = 25;
var divisor = 5;
var cociente = Math.trunc(dividendo / divisor);
var resto = dividendo % divisor;
document.write("<h1>");
document.write(`Dividendo: ${dividendo}<br>`);
document.write(`Divisor: ${divisor}<br>`);
document.write(`Cociente: ${cociente}<br>`);
document.write(`Resto: ${resto}<br>`);
document.write("<h1>");