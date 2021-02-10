function mostrar()
{
	let min=1;
	let max=10;
	let nota

	nota=Math.floor(Math.random()* (max-min +1))+min;

	if(nota<4){
		alert(nota + " Vamos que la proxima se puede");
	}

	else if(nota<9){
		alert(nota + " APROBO");
	}
	else{
		alert(nota + " EXCELENTE");
	}

}