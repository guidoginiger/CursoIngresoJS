function mostrar()
{
	let destino

	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Ushuaia": alert("Sur");break;
		case "Bariloche": alert("Oeste");break;
		case "Mar del plata": alert("Este");break;
		case "Cataratas": alert("Norte");break;
	}
}