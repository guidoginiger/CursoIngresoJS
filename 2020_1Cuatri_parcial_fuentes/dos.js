/*hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let seguir;
  let importe;
  let total = 0;
  let descuento;
  let maxTipo;
  let acumArena = 0;
  let acumCal = 0;
  let acumCemento = 0;
  let maxCaro;
  let importeFinal;
  let maxBolsas;
  let totalBolsas;
  let flag = 1;

 do{ 
   tipo = prompt("Ingrese producto, arena o cal o cemento");

    while( tipo != "arena" && tipo != "cal" && tipo != "cemento"){

      tipo = prompt("ERROR. Reingrese producto, arena o cal o cemento");
    }

  cantidad = parseInt(prompt("Ingrese cantidad de bolsas"));

    while(isNaN(cantidad)){

      cantidad = parseInt(prompt("ERROR. Reingrese cantidad de bolsas"));
    }

  precio= parseInt(prompt("Ingrese precio, mayor a cero"));

    while( precio < 0 || isNaN(precio)){

      precio= parseInt(prompt("ERROR. Reingrese precio, mayor a cero"));
    }

  importe = precio * cantidad;
  total += importe;

  if( tipo == "arena"){

      acumArena += cantidad;
  }

  else if( tipo == "cal"){

    acumCal += cantidad;
  }
  else{

    acumCemento += cantidad;
  }

  if( flag || precio > maxCaro){

    maxCaro = precio;
    maxTipo = tipo;
  
    flag = 0;
  }

    seguir= prompt("¿Quiere ingresar otro producto?");
 }while( seguir == "si");

totalBolsas = acumArena + acumCal + acumCemento;

if(totalBolsas <= 10){

  descuento = 0;
}

else if( totalBolsas <=30){

  descuento = total * 0.15;
}
else{

  descuento = total * 0.25;
}

importeFinal = total - total * descuento;

if( acumArena > acumCal && acumArena > acumCemento){

    maxBolsas = "arena";
}

else if( acumCal >= acumArena && acumCal > acumCemento){

  maxBolsas = "cal";
}
else{

  maxBolsas = "cemento";
}


console.log("total a pagar sin descuento " +total);

if(totalBolsas > 10){ 
console.log("total a pagar con descuento " +importeFinal);}

console.log("Producto con mas cantidad de bolsas " +maxBolsas);

console.log("el tipo mas caro es "+maxTipo+ " con $ " +maxCaro );


}

/*hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/