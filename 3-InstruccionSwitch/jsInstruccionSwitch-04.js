function mostrar()
{
	let mes
	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero": alert("Tiene 28 dias");break;
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Diciembre":
		case "Enero": alert("Tiene 31 dias");break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre": alert("Tiene 30 dias");break;
	}
}