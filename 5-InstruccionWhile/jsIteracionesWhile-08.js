/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero
	let seguir
	let positivos = 0;
	let negativos = 1;
	let flag = 0;
	

	do{
		numero=parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){

			numero=parseInt(prompt("ERROR. Ingrese un numero"));

		}

	if(numero>=0){

		positivos+=numero;
	}

	else{

		negativos*=numero;
	
	}

	seguir=prompt("¿Quiere ingresar otro numero?");

	}while(seguir=="si");

	if(flag==0){

		negativos=0;

	}

	document.getElementById("txtIdSuma").value=positivos;
	document.getElementById("txtIdProducto").value=negativos;
}
