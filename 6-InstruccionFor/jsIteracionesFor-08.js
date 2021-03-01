function mostrar()
{
	let numero
	let contPrimo = 0;

	numero=parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){

			numero=parseInt(prompt("ERROR. Ingrese un numero"));
		}

	for( let i = 1 ; i<=numero ; i++){

		if( numero % i == 0){

			console.log(i);
			contPrimo++;
		}

	}

	if( contPrimo == 2){

		alert(+numero+" es un numero primo");
	}
}
