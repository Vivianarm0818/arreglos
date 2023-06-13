
// alert("Hola");

const numeros = [10,40,30,20,15,5];
const numerosOrdenados = numeros.sort((a, b) => a - b);
// Tuve que implementar (a, b) => a - b; ya que al ordenarlos solo con el .sort, los ordenaba todos pero dejaba el 5 al final, esta formula la encontre en Mozilla.

let numeroMenor = numerosOrdenados[0];
let numeroMayor = numerosOrdenados[numerosOrdenados.length -1];

alert ("Estos son los números ordenados: " +numerosOrdenados);

alert ("Este es el número menor: " + numeroMenor);

alert ("Este es el número mayor: " + numeroMayor);