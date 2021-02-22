function mostrar()
{
	let hora
	
	hora=parseInt(document.getElementById("txtIdHora").value);

	switch(hora){
		case hora: 
		if(hora>=7 && hora<=11){alert("Es de mañana");
		}

		else{
			alert("Es de tarde");
		};
		
		if(hora>19 && hora<=24 || hora>=0 && hora<=6){
			alert("Es de noche");
		}

		else{"La hora no existe"};break;

	
	}

}

/*case hora:
if(hora>=0 && hora<=6){
	alert("Es de noche");
}

else{alert("La hora no existe");};break; */

/*else{hora>19 && hora<=24}{
			alert("Es de noche");
		};break;*/