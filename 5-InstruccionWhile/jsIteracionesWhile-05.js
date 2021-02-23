/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo

	sexo=prompt("Ingrese Sexo f / m").toLowerCase();

	while(sexo!="f" && sexo!="m"){
		sexo=prompt("ERROR. Reingrese Sexo f / m").toLowerCase();
	}

	document.getElementById("txtIdSexo").value=sexo;
}