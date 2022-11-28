/* let bienvenida = prompt ('Bienvenido. Por favor ingrese su nombre');
if (bienvenida == 'mauro') {alert ('bienvenido creador ' +  bienvenida)
}
else {alert ('bienvenido' + bienvenida)}
; */
/* let continuar = false */

/* let total = 0
let nombre = ''
do 
let bienvenida = prompt ('Bienvenido a salchiland. Por favor ingrese su nombre');

let confirmacion = confirm ('Un gusto ' + bienvenida + ' desea acceder a salchiland?');

if (confirmacion == true)
{let tipoDePancho = prompt ('Perfecto a continuacion eliga el pancho que usted desee \n' + '1_ Común \n' + '2_ Vegano \n' + '3_ Doble \n' + '4_ Especialidad del día')}

switch (tipoDePancho) { 
    case "1":
        precio = 500;
        break;
        case "2":
            precio = 600;
            break;
            case "3":
                precio = 950;
        break;
    case "4":
    precio = 1000;
    break;
    default:
        alert("Alguno de los datos ingresados no es correcto");
        precio= 0;
        cantidad= 0; }

else (confirmacion == false) {alert ('Lamentamos que no quieras acceder ' + bienvenida + 'te esperamos nuevamente cuando desees')};
 */

let nombre = "";
let confirmacion = "";
let tipoDePancho = "";
let precio = 0;
let cantidad = 0;
let pasoFinal = "";
function elNombre() {
    nombre = prompt("Bienvenido a salchiland. Por favor ingrese su nombre");
}

elNombre ();
confirmacion = confirm(
  "Un gusto recibirte " +
    nombre +
    "\n¿Usted desea acceder a salchiland para comprar los mejores panchos de argentina?"
);

if (confirmacion) {
  tipoDePancho = prompt(
    "Por favor seleccione una de las opciones dadas" +
    "\n1 - Común" +
    "\n2 - Dobe" +
    "\n3 - Vegano" +
    "\n4 - Sorpresa del día"
  );
  switch (tipoDePancho) {
    case "1":
      precio = 500;
      break;

    case "2":
      precio = 1000;
      break;

    case "3":
      precio = 1500;
      break;

    case "4":
      precio = 2000;
      break;
  }
  while (tipoDePancho > 4) {
    tipoDePancho = prompt(
      "Por favor seleccione una de las opciones dadas" +
        "\n1 - Común" +
        "\n2 - Dobe" +
        "\n3 - Vegano" +
        "\n4 - Sorpresa del día"
        ); 
  }
} else {
  alert(
    "Lamentamos que no desees acceder " +
      nombre +
      " te esperamos nuevamente cuando gustes"
  );
}
cantidad = parseInt(prompt("Cuantos deseas comprar?"));
totalDeCompra = cantidad * precio;

pasoFinal = confirm("El total de su compra es: " + totalDeCompra);

if (pasoFinal) {
  alert(
    "Muchas gracias por su compra. Su pedido llegara en los proximos 3 dias habiles"
  );
} else {
  while ((pasoFinal = false)) {
    tipoDePancho = prompt(
      "Que pancho deseas comprar " +
        nombre +
        "?" +
        "\n1 - Común" +
        "\n2 - Dobe" +
        "\n3 - Vegano" +
        "\n4 - Sorpresa del día"
    );
    switch (tipoDePancho) {
      case "1":
        precio = 500;
        break;

      case "2":
        precio = 1000;
        break;

      case "3":
        precio = 1500;
        break;

      case "4":
        precio = 2000;
        break;

      default:
        tipoDePancho = prompt(
          "Por favor seleccione una de las opciones dadas" +
            "\n1 - Común" +
            "\n2 - Dobe" +
            "\n3 - Vegano" +
            "\n4 - Sorpresa del día"
        );
        while (tipoDePancho > 4) {
          tipoDePancho = prompt(
            "Por favor seleccione una de las opciones dadas" +
              "\n1 - Común" +
              "\n2 - Dobe" +
              "\n3 - Vegano" +
              "\n4 - Sorpresa del día"
          );
        }
    }
    cantidad = parseInt(prompt("Cuantos deseas comprar?"));
    totalDeCompra = cantidad * precio;

    pasoFinal = confirm("El total de su compra es: " + totalDeCompra);
  }
}
