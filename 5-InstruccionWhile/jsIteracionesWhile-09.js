/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let num;
	let max;
	let min;
	let respuesta;
	let flag = 0;
	do{
		num=parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(num)){
		
			num=parseInt(prompt("ERROR. Reingrese un numero"));
		}

		if(flag == 0 ){
			
			max=num;
			min=num;
			flag = 1;

		}
		else{

			if(num>max){
				
				max=num;
			}

			else if(num<min){
				
				min=num;
			}

		}
		
		respuesta=prompt("¿Quiere ingresar otro numero?");

	}while(respuesta=="si");

	document.getElementById("txtIdMaximo").value=max;
	document.getElementById("txtIdMinimo").value=min;
}
