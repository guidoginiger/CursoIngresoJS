/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let num;
	let respuesta;
	let acumPos=0;
	let acumNeg=0;
	let contadorPos = 0;
	let contadorNeg = 0;
	let contadorCero = 0;
	let contadorPares = 0;
	let promedioPos;
	let promedioNeg;
	let diferencia;

	do{
		num=parseInt(prompt("Ingrese un numero"));

		while(isNaN(num)){
			num=parseInt(prompt("ERROR.Ingrese un numero"));
		}

		if(num>0){

			acumPos=acumPos+num;
			contadorPos++;
		}

		else if(num<0){

			acumNeg=acumNeg+num;
			contadorNeg++;
		}
		else{

			contadorCero++;
		}

		//Para contar numeros pares
			if(num %2==0){

			contadorPares++;
			
		}

		respuesta=prompt("¿Quiere ingresar otro numero?");
	}while(respuesta=="si");

	
	
	
	if(contadorPos!=0){

			promedioPos=acumPos/contadorPos;

		}

		if(contadorNeg!=0){

			promedioNeg=acumNeg / contadorNeg;
		}

		diferencia=contadorPos - contadorNeg;

		document.write("Suma de negativos: " +acumNeg );
		document.write("Suma de positivos: " +acumPos);
		document.write("Cantidad de negativos: " +contadorNeg);
		document.write("Cantidad de positivos: " +contadorPos);
		document.write("Cantidad de cero: " +contadorCero);
		document.write("Cantidad de pares: " +contadorPares);
		document.write("Promedio de negativos: " +promedioNeg);
		document.write("Promedio de positivos: " +promedioPos);
		document.write("Diferencia entre positivos y negativos: " +diferencia);

}