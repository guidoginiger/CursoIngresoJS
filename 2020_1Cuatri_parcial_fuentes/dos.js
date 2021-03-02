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
  let tipo
  let cantidad
  let precio
  let seguir
  let importe 
  let subtotal = 0;
  let descuento 
  let acumArena = 0;
  let acumCal = 0;
  let acumCem = 0;
  let maxTipo;
  let maxPrecio;
 
  let flag = 1;
  let importefinal;
  let totalBolsas;
  let maxtipoBolsas;

  do{

    tipo= prompt("Ingrese tipo de producto: arena/cal/cemento");

      while( tipo != "arena" && tipo != "cal" && tipo != "cemento"){

        tipo= prompt("ERROR. Ingrese tipo de producto: arena/cal/cemento");
      }

    precio= parseInt(prompt("Ingrese un precio"));

      while(precio <= 0 || isNaN(precio)){

        precio= parseInt(prompt("ERROR. Ingrese un precio mayor que cero"));
      }

    cantidad= parseInt(prompt("Ingrese cantidad de bolsas"));

      while( cantidad <= 0 || isNaN(cantidad)){

        cantidad= parseInt(prompt("ERROR. Ingrese cantidad de bolsas"));
      }

    importe = precio * cantidad;

    subtotal += importe;

    if( tipo == "arena"){

      acumArena += cantidad; 
    }

    else if( tipo == "cal"){

      acumCal+= cantidad;
    }
    else{

      acumCem+= cantidad;
    }

    if( flag || precio > maxPrecio){

      maxPrecio = precio;
      maxTipo = tipo;

      flag = 0;
    }
    
      seguir= prompt("¿Quiere ingresar otro producto?");

  }while( seguir == "si");

  totalBolsas = acumArena + acumCal + acumCem;


  if( acumArena > acumCal && acumArena > acumCem){

    maxtipoBolsas = "arena";
  }

  else if( acumCal >= acumArena && acumCal > acumCem){

    maxtipoBolsas = "cal";
  }
  else{

    maxtipoBolsas = "cemento";
  }

  console.log("Importe total a pagar es $ " +importefinal);

  console.log("Importe con descuento es $ " +importefinal);

  console.log("El tipo con mas cantidad de bolsa es: " +maxtipoBolsas);

  console.log("El tipo mas caro es: " +maxTipo+ " con " +maxPrecio);
  
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