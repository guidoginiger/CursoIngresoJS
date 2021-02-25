function mostrar()
{
	let numero;
	let contador = 0;

	numero=parseInt(prompt("Ingrese un numero"));

	while(isNaN(numero)){

		numero=parseInt(prompt("ERROR. Ingrese un numero"));
	}

	for( let i=1; i<=numero; i++){

		if(numero % i==0){

			console.log(i);
			contador++
		}
	}

	console.log("Cantidad de divisores: "+contador);
}