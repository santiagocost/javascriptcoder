function calculandoPromedio (num1, num2, num3) {
    let promedio = (num1 + num2 + num3)/4;
    return 'El promedio es: ' + promedio + ' pesos';
}
console.log(calculandoPromedio(50, 200, 30));

for (let i= 1; i <=25; i++) {
    console.log('iteraciones');
}
console.log ('Mostrar ciclo');

let pelicula = prompt ("Elije tu película favorita");
if (pelicula == 'terror') {
    alert ("No hay películas de ese género");
} else {
    alert ("Aquí tienes")
}