let num1: number = Number(prompt("Ingrese el dividendo"));
let num2: number = Number(prompt("Ingrese el divisor"));

function esMultiplo(num1: number, num2: number): boolean {
  let verdadero: boolean = true;
  let falso: boolean = false;
  let resultado: boolean;
  if (num1 % num2 === 0) {
    resultado = verdadero;
  } else {
    resultado = falso;
  }
  return resultado;
}

console.log("El resultado es: ", esMultiplo(num1, num2));
