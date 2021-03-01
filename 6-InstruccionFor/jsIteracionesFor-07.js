function mostrar()
{
	let numero
	let contDiv = 0;

	numero=parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){

			numero=parseInt(prompt("ERROR. Ingrese un numero"));

		}
	
		for(let i =1; i<=numero; i++){

			if( numero % i == 0 ){

				console.log(i);
				contDiv++;
			}
		}
	
		console.log("La cantidad de numero divisores son: "+contDiv);
}

/*al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.*/