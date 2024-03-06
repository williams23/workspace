/**1) Crear el siguiente array:
    
    Completar los meses del año y arreglar posiciones. Imprimir en consola.*/


const months = ['Enero', 'Febrero', 'Abril', 'Julio'];

months[2] = 'Marzo'; //cambiando valor
months[3] = "Abril"; //agregar
months[4] = "Mayo" ;
months[5] = "Junio" ;
months[6] = "Julio" ;
months[7] = "Agosto" ;
months[8] = "Septiembre" ;
months[9] = "Octubre" ;

//.push agrega elementos al final
months.push('Noviembre');
months.push('Diciembre');

console.table(months);

/**2) Crear el siguiente array de objetos:*/

    const carrito = [
        {nombre: 'Mouse optico', precio: 10000},
        {nombre: 'Teclado mecanico', precio: 50000},
        {nombre: 'Celular', precio: 1000000},
        {nombre: 'Monitor 20"', precio: 10000000},
        {nombre: 'Audifonos', precio: 90000},
        {nombre: 'Tablet', precio: 70000},
    ];

   /**  Recorrer(iterar) el array para obtener el total de la compra. Imprimir el total en consola.*/

   carrito.forEach(function(item){
    console.log(`${item.nombre} -  Precio: ${item.precio}`);
})

    carrito.forEach(function(suma){
        console.log(`$Precio: ${suma.precio}`);
        });

        let total=0,precio = [10000, 50000, 1000000, 1000000, 90000, 70000];
        precio.forEach(function(a){total += a;});
        console.log(total);