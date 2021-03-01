function mostrar()
{
	let repeticiones;
	
	repeticiones= parseInt(prompt("Ingrese un numero"));
	
	while(isNaN(repeticiones) || repeticiones <= 0){

		repeticiones= parseInt(prompt("ERRoR. Ingrese un numero positivo"));
	}

	for(let i=0; i < repeticiones; i++ ){

		alert("Hola UTNFra");
	}

}