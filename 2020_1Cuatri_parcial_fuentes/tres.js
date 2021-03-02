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
	let flag = 1; 
	let NombremaxTemp;
	let contMayorViudo = 0;
	let contSolViudo = 0;
	let contTedad = 0;
	let contSol = 0;
	let acumSol = 0;
	let promedioSol = 0;

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

	
}

/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.*/