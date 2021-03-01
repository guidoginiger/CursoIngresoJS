/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let total = 0;
	let num;
	let promedio;
	let contador = 0;
	let respuesta = 'si';

	while(respuesta == 'si'){
		
		num= parseInt(prompt("Ingrese un numero"));

		while(isNaN(num)){

			num= parseInt(prompt("ERROR. Ingrese un numero"));

		}

		total+=num;

		respuesta = prompt("Quiere ingresar otro numero?:");
		
		contador++;
	
	}

	promedio= total / contador; 
	
	document.getElementById("txtIdSuma").value=total;
	document.getElementById("txtIdPromedio").value=promedio;

}