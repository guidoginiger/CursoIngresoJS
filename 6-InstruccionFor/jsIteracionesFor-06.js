function mostrar()
{
	let numero
	let contPar = 0;

	numero=parseInt(prompt("Ingrese un numero:"));

		while(isNaN(numero)){
			numero=parseInt(prompt("ERROR. Ingrese un numero:"));
		}

	for(let i = 1 ;i<=numero ;i++){

		if(i %2 == 0){

			console.log(i);
			contPar++;
		}
	}

	console.log("La cantidad de numeros pares son: "+contPar);
}

/*al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/