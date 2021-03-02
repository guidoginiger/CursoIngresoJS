/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar()
{
	let tipo
	let precio
	let cantidad
	let marca 
	let fabricante
	let contJ = 0;
	let contA = 0;
	let contB = 0;
	let acumJ = 0;
	let acumB = 0;
	let acumA = 0;
	let promedio;
	let maxtipo = 0;
	let precioMin;
	let cantidadMin;
	let fabricanteMin;
	let flag = 1;

	for(let i=0 ; i<2 ; i++){

		tipo= prompt("Ingrese producto. alcohol o barbijo o jabon");

			while(tipo != "alcohol" && tipo != "barbijo" && tipo!= "jabon"){

				tipo= prompt("ERROR. Ingrese producto. alcohol o barbijo o jabon");	
			}

		precio= parseInt(prompt("Ingrese un precio entre 100 y 300"));

			while(precio < 100 || precio > 300 || isNaN(precio)){

				precio=parseInt(prompt("ERROR. Ingrese un precio entre 100 y 300"));
			}

		cantidad= parseInt(prompt("Ingrese cantidad de productos. Entre 1 y 1000"));

			while(cantidad < 1 || cantidad > 1000 || isNaN(cantidad)){

				cantidad= parseInt(prompt("ERROR. Ingrese cantidad de productos. Entre 1 y 1000"));
			}

		marca= prompt("Ingrese una marca");

		fabricante= prompt("Ingrese un fabricante");

	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

	if(tipo == "alcohol"){

		if(flag || precio < precioMin ){

			precioMin = precio;

			fabricanteMin = fabricante;

			cantidadMin = cantidad;

		}

		acumA+=cantidad;
		contA++;
	}

	//tipo barbijo

	else if( tipo == "barbijo"){

		acumB+=cantidad;
		contB++;
	}

	//tipo jabon

	else{

		acumJ+=cantidad;
		contJ++;
	}
}	

	//Del tipo con mas unidades,  el promedio por compra

	if(acumA > acumB && acumA > acumJ){

		promedio = acumA / contA;

		maxtipo = "alcohol";

	}

	else if(acumB >= acumA && acumB >= acumJ){

		promedio = acumB / contB;

		maxtipo = "barbijo";
	}

	else {

		promedio = acumJ / contJ;

		maxtipo= "jabon";
	}

	document.write("El alcohol mas barato es el: " +fabricanteMin+ " con " +acumA+ " unidades. Y su precio es: $" +precioMin+  "<br>" );

	document.write("El producto con mas unidades es: " +maxtipo+ " y el promedio por compra es: " +promedio+  "<br>");

	document.write("La cantidad total de jabones es de: " +acumJ+ " unidades <br>");


}
