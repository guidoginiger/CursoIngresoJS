/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo
	let Descuento
	let resultado
	
	sueldo=parseFloat(document.getElementById("txtIdImporte").value);

	Descuento= (sueldo *25)	/100;

	resultado= sueldo - Descuento;
	document.getElementById("txtIdResultado").value=resultado;
}
