function mostrar()
{
	let numero;

	for( ;  ;  ){

		numero=parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){
			
			numero=parseInt(prompt("ERROR. Ingrese un numero"));}

			console.log(numero);
	
		if(numero==9){
			break;
		}
	}
		
	alert("Chau");

}