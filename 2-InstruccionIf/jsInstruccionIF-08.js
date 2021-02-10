function mostrar()
{	let edad
	let estadocivil

	edad=parseInt(document.getElementById("txtIdEdad").value);
	estadocivil=document.getElementById("estadoCivil").value;

	// es soltero y no es menor
	
	if(edad>=18 && estadocivil=="Soltero"){
		alert("Es soltero y no es menor");
	}

}