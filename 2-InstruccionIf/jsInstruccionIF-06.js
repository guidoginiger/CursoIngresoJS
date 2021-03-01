function mostrar()
{	let edad

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad<13){
		alert("Es un niño");
		}
		
		else if(edad>=13 && edad<=17){
			alert("Es un adolescente");
		}
	
		else{
			alert("Es un adulto");
		}

}

/* if(edad>=18){
	alert("Es mayor de edad");
}

else if(edad>=13){
	alert("Es un adolescente")
}

else{
	alert("Es un niño/niña");
}

*/