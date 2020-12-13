// A
var tempF = parseFloat(prompt("Ingrese la temperatura en Fahrenheit"))

var convertirFaC = (tempF - 32)* 5/9;

document.write("<h2>Respuestas</h2>");
document.write("A. La temperatura ingresada es de "+ tempF +"°F. Esto es igual a "+ convertirFaC+"°C<br>")

//B

var tempC = parseFloat(prompt("Ingrese la temperatura en Centígrados"))

var convertirCaF = (tempC *9/5) +32

document.write("B. La temperatura ingresada es de "+ tempC +"°C. Esto es igual a "+ convertirCaF+"°F")

