function mostrar()
{
	let nota
	let min = 1
	let max = 10

	nota= Math.floor(Math.random()*(max-min +1)) + min;

	if(nota>=9){

		alert("EXCELENTE. Su nota es "+nota);
	}

	else if(nota>=4){

		alert("APROBO. Su nota es "+nota);

	}

	else{

		alert("Vamos la proxima se puede. Su nota es "+nota);
	}
}