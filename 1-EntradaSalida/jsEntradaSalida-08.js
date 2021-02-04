/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 	let num1
	let num2
	let resultado

	num1=document.getElementById("txtIdNumeroDividendo").value;
	num1=parseInt(num1);

	num2=document.getElementById("txtIdNumeroDivisor").value;
	num2=parseInt(num2);

	resultado= num1 % num2;

	alert("El resto entre el dividendo y el divisor es " +resultado);
}

/*	Paso 1 Identificar variables (let).
	Paso 2 Declarar las variables y fijarme que me pide el enunciado. 
	Paso 3 Relacionarlo con el HTML a traves de document.getElementById("...").value; a c/ variable.
	Paso 4 Agregar la variable parseInt(...); porque estamos hablando de numeros enteros.
	Paso 5 Declarar la variable resultado (¿cual es la operacion que estoy buscando?).
	Paso 5 Definir alert("...");
*/