// Case sensitive

// Keywords
// Math();
// this
// type
// interface
//var
// const
// let
// class

// Variable => informacion que queremos guardar en memoria o con un identificador
// var estoEsUnaVariable = 'Carlos';
// console.log(estoEsUnaVariable);
// estoEsUnaVariable = 'Damian';
// console.log(estoEsUnaVariable);

// Inicializar variables - > constantes idientificadores
var estoEsVar = "Var"; // son variables -> pueden ser cambiadas
let estoEsLet = "Let"; // son variables -> pueden ser cambiadas
// const estoEsConst = 'Const'; // es una constante y no puede ser cambiada

// Typo de dato
// Primitivos
// number
// string -> cadenas de texto
// undefind
// null
// boolean
let stringE = "Ejemplo String";
let numberE = 10;
let undefindE = undefined;
let nullE = null;
let booleanE = false; // false ~ true

// No primitivos
// Objetos
// Date
// Array
// Map
// Set
let obj = { name: "" };
let date = new Date();
let arrayo = ["ho", "la"];
let map = new Map();
let set = new Set();

// Scope -> visibilidad de nuestra variable o constante en el documento
// Bloque
// {

// }
// Global
let global13 = "dkd";
var global1 = "Esto es Global"; //  'Esto es Global'
console.log(global1);
for (let index = 0; index < 10; index++) {
  var global1 = "ESTO ES BLOQUE";

  console.log(global1);
}
console.log(global1);
//funcion

// const estoEsUnaFuncion = () =>{
//     // dentro es el scope de funcion
// }

const escribir = () => {
  let global3 = "hola soy function";
  return global3;
};

console.log(escribir());

// typos primitivos son asing por valor / . typos no primitivos son asignos por referencia
// Operadores logicos

let valor1 = 10;
let valor2 = 10;
let valor3 = 11;

// Operadores logicos
// == -> busca igualdad y hace coercion
// === -> busca igualdad absoluta
// > mayor que
// < menor que
// >= mayor o igual
// <menor o igual
// != diferente
// ! negacion opuesto

// console.log(valor1 == valor2) // true
// console.log(valor1 == valor3) // false

let obj1 = {
  name: "carlos",
  apellido: "damian",
};
let obj2 = {
  name: "carlos",
  apellido: "damian",
};

let prueba = obj1; // copia de la refencia
prueba.city = "xd";
// console.log(prueba === obj1);
prueba = { ...prueba, city: "hola mundo " };
// console.log('prueba',prueba);
// console.log('obj1',obj1);

// console.log(prueba == obj1) // referencia memoria 78347349
// console.log(obj1 == obj2) // referencia memoria 78347349

// Operadores
// let num1 = 1;
// let num2 = 1;
//     // Aritmeticos
//     //suma +
//     num1 + num2
//     // resta -
//     num1 - num2
//     // divicion /
//     num1 / num2
//     // multi *'
//     num1 * num2
//     // exponencial ^
//     num1 ^ num2
//     // modulos resto &
//     %num1
//     // incrementos ++
//     num1++
//     // decrementa --
//     num2--
//     // Asignacion

// = let hola = hola;
// += num1 += num1  // x = x + y // x+=y
// -= num1 -= num1  // x = x - y // x-=y
// *= num1 *= num1  // x = x * y // x*=y
// Logicos
// AND && => nos va devolver true si las dos condiciones son verdaderas
// console.log(10 === 9 && 10 === 10);
// console.log(10 === 10 && 10 === 10);
// // OR || => nos va devolver true si las almenos una condiciones es verdaderas
// console.log(10 === 9 || 10 === 10); // true
// console.log(10 === 10 || 10 === 10); // true
// NOT ! => nos va a devolver true si la operacion da true
// console.log(10 == 9);
// Comparacion
// == igual a
// != not igual a
// igualdad absoluta
// no igual absoluta

console.log("Esto es una comparacion no absoluta", 10 == "10"); // => 10 == 10 // 10 == '10' => true  // no la usen
console.log("Esto es una comparacion absoluta", 10 === "10"); // => 10 === '10' -> false

// Condiconales
// if // si es verdadero as algo
// else
// elseif
// if (10 === 11) {
//   // false
//   console.log("ESto se cumplio"); // verdadero
// } else if (11 === 12) {
//   // el else entra lo false
//   console.log("haz esto instead");
// } else {
//   console.log("Final final ");
// }
// // ternarios 
// 10 === 11 ? 
//     console.log('Haz la primera cosa') 
//     : 11 === 12 ?
//       console.log('Haz esto instead ternario') : 
//         console.log('Final Final');


// iteraciones 
// while //
let pruebuu = 10;
while (pruebuu <= 10){
    console.log('hola');
    pruebuu ++
}
// for

// do while
//
