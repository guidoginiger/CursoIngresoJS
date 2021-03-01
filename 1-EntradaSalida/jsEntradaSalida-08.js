/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 	
	let dividendo
	let divisor
	let resultado

	dividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);

	divisor= parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resultado= dividendo / divisor;

	alert("El resto es "+resultado);
}

/*	Paso 1 Identificar variables (let).
	Paso 2 Declarar las variables y fijarme que me pide el enunciado. 
	Paso 3 Relacionarlo con el HTML a traves de document.getElementById("...").value; a c/ variable.
	Paso 4 Agregar la variable parseInt(...); porque estamos hablando de numeros enteros.
	Paso 5 Declarar la variable resultado (¿cual es la operacion que estoy buscando?).
	Paso 5 Definir alert("...");
*/