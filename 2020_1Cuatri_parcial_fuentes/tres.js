/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	let nombre
	let edad
	let sexo
	let estadocivil
	let temperatura
	let seguir
	let tempMax;
	let acumViu = 0;
	let contViu = 0;
	let cantidadViu;
	let cantidadSol;
	let acumSol = 0;
	let contSol = 0;
	let cantidadTedad;
	let acumTedad = 0;
	let contTedad = 0;
	let promedio;

	do{

		nombre= prompt("Ingrese un nombre");

		edad= parseInt(prompt("Ingrese la edad de la persona"));

			while(isNaN(edad)){

				edad= parseInt(prompt("ERROR. Ingrese la edad de la persona"));
			}

		sexo= prompt("Ingrese sexo f/m");

			while(sexo != "f" && sexo!= "m"){

				sexo= prompt("ERROR. Ingrese sexo f/m");
			}

		estadocivil= prompt("Ingrese estado civil (soltero/casado/viudo)");

			while(estadocivil != "soltero" && estadocivil != "casado" && estadocivil !="viudo"){

				estadocivil= prompt("ERROR. Ingrese estado civil (soltero/casado/viudo)");
			}

		temperatura= parseInt(prompt("Ingrese temperatura"));

			while(isNaN(temperatura)){

				temperatura= parseInt(prompt("ERROR. Ingrese temperatura"));
			}
	
	seguir= prompt("¿Quiere agregar a mas pasajeros?");

	}while(seguir == "si")

	if( temperatura < tempMax){

		temperatura = tempMax;
	}


	if( sexo == "m" && estadocivil == "soltero"){

		acumSol += cantidadSol;
		contSol++;
	}

	else if( sexo == "m" && estadocivil == "viudo"){

		acumViu += cantidadViu;
		contViu++;

		if( edad >= 18){

			acumViu += cantidadViu;
			contViu++;
		}
	}

	if(edad >= 60){

		if(temperatura > 38){

			acumTedad+=cantidadTedad;
			contTedad++;
		}
	}

	if( sexo == "m" && estadocivil == "soltero"){

		promedio = edad /cantidadSol;
	}


	document.write(nombre+ " es la persona con mas temperatura con: " +temperatura+ "<br>");

	document.write("Estan viudos: " +contViu+ "<br>");

	document.write("Hay " +contSol+ " solteros y " +contViu+ " viudos <br>");

	document.write("Hay " +contTedad+ " personas de tercera edad que tienen mas de 38 de temperatura <br>");

	document.write("El promedio de edad de hombres solteros es de: " +promedio+ "<br>");
}

/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.*/