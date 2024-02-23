/**
 * Crear las siguientes constantes: nombre, apellidoPaterno, apellidoMaterno, nacimiento, sexo.
A partir de estos datos crear la siguiente estructura:
    1. Las primeras dos letras del apellido paterno
    2. La primer letra del apellido materno
    3. La primer letra del nombre
    4. año de nacimiento
    5. mes de nacimiento
    6. dia de nacimiento
    7. primer letra del sexo
    8. El resultado mostrarlo en consola en mayusculas
ejemplo:

nombre: Miguel
apellido paterno: Chuil
apellido materno: Martinez
nacimiento: 15/02/2015
sexo: Masculino

Resultado: CHMM20150215M

developer.chuil@gmail.com
 */

const nombre ='William';
const apellidoPaterno = "Velandia";
const apellidoMaterno = "Zambrano";
const nacimiento = "23/09/1986";
const sexo = "masculino";



// Cortar texto
console.log(apellidoPaterno.slice(0, 2));

console.log(apellidoMaterno.slice(0, 1));

console.log(nombre.slice(0, 1));

console.log(nacimiento.slice(6, 10));

console.log(nacimiento.slice(3, 5));

console.log(nacimiento.slice(0, 2));

console.log(sexo.slice(0, 1));

//console.log(apellidoPaterno.toUpperCase()); //mayusculas

console.log(apellidoPaterno.slice(0, 2).toUpperCase(0, 2) + apellidoMaterno.slice(0, 1).toUpperCase(0, 1) + nombre.slice(0, 1).toUpperCase(0, 1) + nacimiento.slice(6, 10) + nacimiento.slice(3, 5) + nacimiento.slice(0, 2) + sexo.slice(0, 1).toUpperCase(0, 1) );