/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero
	let positivos=0;
	let negativos=1;
	let respuesta;

	

	
	do{
		numero=prompt("Ingrese un numero");

		while(isNaN(numero)){
			numero=prompt("ERROR. Ingrese un numero");
		}

		if(numero>=0){
			positivos+=numero;
			
		}
		else{
			negativos*=numero;
		}

		
		respuesta = prompt("¿Quiere ingresar otro numero?");

	}while(respuesta=='s');

	document.getElementById("txtIdSuma").value=positivos;
	document.getElementById("txtIdProducto").value=negativos;

}