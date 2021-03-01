function mostrar()
{	let min
	let max
	let num

	min=1;
	max=10;

	//Genero el número RANDOM entre 1 y 10 
	num= Math.floor(Math.random() * (max-min +1)) + min;
	
	alert(num);

}