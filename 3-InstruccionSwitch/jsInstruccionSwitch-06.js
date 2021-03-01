function mostrar()
{
	let hora

	hora=parseInt(document.getElementById("txtIdHora").value);

	if(hora>=25 || hora<0){
		
		alert("La hora no existe.");

	}

	if (hora>= 7 && hora<=11){

		alert("Es de mañana");
	}

	else if(hora>11 && hora<=19){

		alert("Es de tarde.");
	}

	else{
		alert("Es de noche.");
	}
 
}