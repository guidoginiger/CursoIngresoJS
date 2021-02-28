function mostrar()
{
  let tipo;
  let cant;
  let precioBase = 50;
  let precioscant;
  let acumA = 0;
  let acumCal = 0;
  let acumCem = 0;
  let total;
  let descuento;
  let seguir;

  do{
    
    tipo=prompt("Ingrese tipo de producto: Arena, Cal o Cemento").toLowerCase();

    while( tipo !=="arena" && tipo !=="cal" && tipo !== "cemento"){

    tipo=prompt("Error. Ingrese tipo de producto: Arena, Cal o Cemento");
    }

    cant=parseInt(prompt("Ingrese cantidad de bolsas"));

    while(isNaN(cant)){

      cant=parseInt(prompt("Error. Ingrese cantidad de bolsas"));

    }

    if(tipo=="arena"){
    if(cant <= 10){

      preciocant= precioBase * cant;

      descuento= preciocant * 0.15;

      total=preciocant - descuento;
    }

    else if(cant >= 30){

      preciocant= precioBase * cant;

      descuento= preciocant * 0.25;

      total=preciocant - descuento;

    }
    else{
      precioscant=precioBase * cant;
      total=precioscant;
    }
  }

  if(tipo=="cal"){
    if(cant >= 10){

      preciocant= precioBase * cant;

      descuento= preciocant * 0.15;

      total=preciocant - descuento;
    }

    else if(cant >= 30){

      preciocant= precioBase * cant;

      descuento= preciocant * 0.25;

      total=preciocant - descuento;

    }
    else{
      precioscant=precioBase * cant;
      total=precioscant;
     }
  }

  if(tipo=="cemento"){
    if(cant >= 10){

      preciocant= precioBase * cant;

      descuento= preciocant * 0.15;

      total=preciocant - descuento;
    }

    else if(cant >= 30){

      preciocant= precioBase * cant;

      descuento= preciocant * 0.25;

      total=preciocant - descuento;

    }
    else{
      precioscant=precioBase * cant;
      total=precioscant;
    }
  }
  }while(seguir=="si");


 // do{
      
//  }while(seguir="si")
}
