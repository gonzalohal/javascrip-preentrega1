let padel = "Anotador de puntos Padel";
let tenis = "Anotador de puntos Tenis";
let precioP = 6500;
let precioT = 7500;
let stockP = 10;
let stockT = 20;
let bucle = 0;

alert("Bienvenido/a a la tienda oficial de Anotador de puntos!");

while (bucle !== 1) {
  let option = prompt(
    `¿Quiere un ${padel} o ${tenis}? P para padel T para tenis`
  );
  console.log(option);
  if (option == "P" || option == "p") {
    let unidadesP = Number(prompt("ingrese cuantas unidades quiere"));
    if (stockP >= unidadesP) {
      let option2 = prompt(
        "Unidades disponibles, ¿Desea continuar con la compra? Si o No"
      );
      if (option2 == "si" || option2 == "Si" || option2 == "SI") {
        let total = precioP * unidadesP;
        alert(`el total a pagar del ${padel} es de $ ${total}`);

        function stokNewP() {
          stockP = stockP - unidadesP;
          return stockP;
        }
        console.log(`Total a pagar ${total}`);
        // console.log(total);
        stockP = stokNewP();
        console.log(`Stock Padel disponible ${stockP}`);
        // console.log(stockP);
        bucle = 1;
      } else {
        alert("¡Compra cancelada!");
      }
    } else {
      alert(
        `Faltan unidades, actualmente hay ${stockP} y solicito ${unidadesP}`
      );
    }
  } else if (option == "T" || option == "t") {
    let unidadesT = Number(prompt("ingrese cuantas unidades quiere"));
    if (stockT >= unidadesT) {
      let option2 = prompt(
        "Unidades disponibles, ¿Desea continuar con la compra? Si o No"
      );
      if (option2 == "si" || option2 == "Si" || option2 == "SI") {
        let total = precioT * unidadesT;
        alert(`el total a pagar del ${padel} es de $ ${total}`);

        function stokNewT() {
          stockT = stockT - unidadesT;
          return stockT;
        }
        console.log(`Total a pagar ${total}`);
        // console.log(total);
        stockT = stokNewT();
        console.log(`Stock Tenis disponible ${stockT}`);
        // console.log(stockT);
        bucle = 1;
      } else {
        alert("¡Compra cancelada!");
      }
    } else {
      alert(
        `Faltan unidades, actualmente hay ${stockT} y solicito ${unidadesT}`
      );
    }
  } else {
    alert("Opcion no valida, intentelo nuevamente");
  }
}

let optionUser = prompt("¿Desea saber algo mas del producto? Si o No");

if (optionUser == "Si" || optionUser == "si" || optionUser == "SI") {
  optionUser = Number(
    prompt(
      "ingrese el numero segun las opciones: 1)Productos 2)Stock Disponible 3)Precios"
    )
  );
  switch (optionUser) {
    case 1:
      alert(`Productos:
        -${padel}
        -${tenis}`);
      break;
    case 2:
      alert(`${padel}: ${stockP}
${tenis}: ${stockT}`);
      console.log(`${padel}: ${stockP}  ${tenis}: ${stockT}`);
      break;
    case 3:
      alert(
        `${padel}: $${precioP} por unidad
${tenis}: $${precioT} por unidad`
      );
      break;
    default:
      alert("Opcion no disponible");
      console.log("Opcion no disponible");
  }
} else {
  alert("Adios!");
}
