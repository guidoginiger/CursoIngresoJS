function mostrar()
{	let edad

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(!(edad>=13 && edad<=17)){
		alert("No es adolescente");
	}

}

/*if(edad<13 || edad>17){alert("No es adolescente")}*/ 

/*if(edad<13){
		alert("No es adolescente");
	}

	else if(edad>=18){
		alert("No es adolescente");
	} */