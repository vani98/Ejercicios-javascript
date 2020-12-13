producto1 = parseFloat(prompt("Ingrese el precio de producto uno:"));
producto2 = parseFloat(prompt("Ingrese el precio de producto dos:"));
producto3 = parseFloat(prompt("Ingrese el precio de producto tres:"));

suma = producto1 + producto2 + producto3;
promedio = suma/3; 
precioFinal = (suma * 0.21) + suma;


document.write("<h2>Respuestas</h2>")
document.write("1. La suma de los productos es: " + suma);
document.write("<br>2. El promedio de los productos es: "+ promedio);
document.write("<br>3. El precio final es:" + precioFinal);
