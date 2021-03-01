function mostrar()
{
    let numero;
    let i = 0;
    let total = 0;
    let promedio;

    while(i<5){

        numero=parseInt(prompt("Ingrese un numero"));

        while(isNaN(numero)){

            numero=parseInt(prompt("ERROR. Ingrese un numero"));
        }

        total= total + numero; 

        i++; //suma los numeros introducidos
    }

    promedio= total / 5;

    document.getElementById("txtIdSuma").value=total;
    document.getElementById("txtIdPromedio").value=promedio;
}