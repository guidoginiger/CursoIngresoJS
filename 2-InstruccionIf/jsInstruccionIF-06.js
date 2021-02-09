function mostrar()
{	let edad

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad>=18){
		alert("Es mayor de edad");
	}

	else if(edad>=13){
		alert("Es un adolescente")
	}

	else{
		alert("Es un niño/niña");
	}

}