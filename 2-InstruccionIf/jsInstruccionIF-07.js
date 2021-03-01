function mostrar()
{	let edad
	let estadocivil

	edad=parseInt(document.getElementById("txtIdEdad").value);

	estadocivil=document.getElementById("estadoCivil").value;
	
	// edad menor a 18 años y un estado civil distinto a "Soltero"
	
	if(edad<18 && estadocivil != "Soltero"){
		
		alert("Es muy pequeño para NO ser soltero");
	}
	
}