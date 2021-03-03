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
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let contAlcohol = 0;
	let acumAlcohol = 0;
	let minAlcohol;
	let maxTipo = 0;
	let promedio;
	let contJabon = 0;
	let acumJabon = 0;
	let acumBarbijo = 0;
	let contBarbijo = 0;
	let cantMin;
	let fabricanteMin;
	let flag = 1;

	for(let i = 0; i < 5; i++){

		tipo=prompt("Ingrese producto, alcohol/barbijo/jabon");

			while(tipo != "alcohol" && tipo != "barbijo" && tipo !="jabon"){
				
				tipo=prompt("Ingrese producto, alcohol/barbijo/jabon");
			}
		
		precio= parseInt(prompt("Ingrese precio entre 100 y 300"));

			while(precio < 100 || precio > 300 || isNaN(precio)){

				precio= parseInt(prompt("ERROR. Ingrese precio entre 100 y 300"));
			}

		cantidad= parseInt(prompt("Ingrese unidades entre 1 y 1000"));
		
			while(cantidad < 1 || cantidad > 1000 || isNaN(cantidad)){

				cantidad= parseInt(prompt("ERROR. Ingrese unidades entre 1 y 1000"));
			}
		
		marca= prompt("Ingrese marca");
		fabricante= prompt("Ingrese fabricante");

		if( tipo == "alcohol"){

			if(flag || precio < minAlcohol){

				minAlcohol = precio;

				fabricanteMin = fabricante;
				
				cantMin = cantidad;

				flag = 0;

			}

			acumAlcohol+= cantidad;
			contAlcohol++;

		}

		else if(tipo == "barbijo"){

			acumBarbijo+= cantidad;
			contBarbijo++;
		}
		else{
			acumJabon+= cantidad;
			contJabon++;
		}
	}

	if( acumAlcohol > acumBarbijo && acumAlcohol > acumJabon){
		
		promedio = acumAlcohol / contAlcohol;
		maxTipo = "alcohol";
	}

	else if( acumBarbijo >= acumAlcohol && acumBarbijo > acumJabon){

		promedio = acumBarbijo / contBarbijo;
		maxTipo = "barbijo";
	}
	else{

		promedio = acumJabon / contJabon;
		maxTipo = "jabon";
	}

	console.log("El alcohol mas barato es "+fabricanteMin+ " con " +acumAlcohol+ " unidades y su precio es $" +minAlcohol);

	console.log("El producto con mas unidades es " +maxTipo+ " y el promedio por compra es " +promedio);

	console.log("Hay " +acumJabon+ " jabones");

}

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