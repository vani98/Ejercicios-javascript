document.write("<h2>Respuestas</h2>");
//A

var largo = parseFloat(prompt('Ingrese el largo del terreno rectangular'))
var ancho = parseFloat(prompt('Ingrese el ancho del terreno rectangular'))
var perimetroRectangulo = (largo + ancho)*2
var hiladas = 3;

document.write("A. El largo ingresado es de "+largo+"m y el ancho ingresado es de "+ancho+"m")
document.write("<br>Usted necesita: "+ perimetroRectangulo*hiladas+" metros de cable<br>");

//B
const pi = 3.14159265359
var radio = parseFloat(prompt('Ingrese el radio del terreno circular:'))
perimetroCirculo = 2*pi * radio
document.write("B. El radio ingresado es de: "+radio+"m")
document.write("<br>Usted necesita: "+ perimetroCirculo * hiladas +" metros de cable")

//C

var contrapiso= parseFloat(prompt('Ingrese la medida del contrapiso por metro cuadrado: Ej(1)'))
var cemento = 2* contrapiso 
var cal = 3* contrapiso 
document.write("<br> C. Para un contrapiso de "+contrapiso+"m², se necesitan "+cemento +" bolsas de cemento y "+cal+" bolsas de cal")
