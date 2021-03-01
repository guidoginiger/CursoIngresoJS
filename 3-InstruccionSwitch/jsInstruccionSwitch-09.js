function mostrar()
{
	let estacion
	let destino
	let precioinicial
	let aumento
	let descuento
	let preciofinal

	precioinicial=15000
	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion){
		
		case "Invierno": 
		if(destino=="Bariloche"){
		aumento= (precioinicial*20) /100;

		preciofinal= precioinicial + aumento;

			alert("El precio final es $"+preciofinal);
		}
		else if(destino=="Mar del plata"){
			descuento= (precioinicial*20) /100;

			preciofinal= precioinicial - descuento;

			alert("El precio final es $" +preciofinal);
		}
		
		else{
			descuento= (precioinicial *10)/100;

			preciofinal= precioinicial - descuento;

			alert("El precio final es $"+preciofinal);
		}break;

		case "Verano": 
		if(destino=="Bariloche"){
			descuento= (precioinicial*20) /100;
	
			preciofinal= precioinicial - descuento;
	
				alert("El precio final es $"+preciofinal);
			}
			else if(destino=="Mar del plata"){
				aumento= (precioinicial*20) /100;
	
				preciofinal= precioinicial + aumento;
	
				alert("El precio final es $" +preciofinal);
			}
			
			else{
				aumento= (precioinicial *10)/100;
	
				preciofinal= precioinicial + aumento;
	
				alert("El precio final es $"+preciofinal);
			}break;
		
		case "Otoño": 
		case "Primavera":
			if(destino=="Bariloche" || destino=="Mar del plata" || destino=="Cataratas"){
				aumento= (precioinicial*10)/100;

				preciofinal= precioinicial+aumento;

				alert("El precio final es $"+preciofinal);
			} 
			else{alert("El precio final es $"+precioinicial);}break;
	}
}