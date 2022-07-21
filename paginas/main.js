//COMPRA DE UN PRODUCTO.

let nombreApellido = prompt ("ingrese su Nombre y Apellido");
    alert (`Hola ${nombreApellido}.`);
let productos = prompt("Estos son nuestros productos disponibles por Kilo. Ingrese:" +
"\n1-Nueces" +
"\n2-Almendras" +
"\n3-Castaña" +
"\n4-Mani" +
"\nESC para salir.");
while ( productos !== "ESC" && productos !== "esc"){
    if (productos == 1){
        let precioNuez = 1800;
        alert (`El precio de las nueces es de $${precioNuez}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoNueces = precioNuez * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoNueces}`);
        break;
    }
    else if (productos == 2) {
        let precioAlmendras = 2100;
        alert (`El precio de las Almendras es de $${precioAlmendras}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoAlmendras = precioAlmendras * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoAlmendras}`);
        break;
    }
    else if (productos == 3) {
        let precioCastanas = 2600;
        alert (`El precio de las Castanas es de $${precioCastanas}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoCastanas = precioCastanas * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoCastanas}`);
        break;
    }
    else if (productos == 4) {
        let precioMani = 400;
        alert (`El precio del mani es de $${precioMani}`);
        let cantidad = parseInt(prompt("¿Cuantas unidades desea adquirir?"));
        let calculoMani = precioMani * cantidad;
        alert (`${nombreApellido} el total a abonar es $${calculoMani}`);
        break;
    }
    else {
        alert("No disponemos de ese producto, desea ver otro producto?");
    }
    
    productos = prompt("Estos son nuestros productos disponibles por Kilo. Ingrese:" +
    "\n1-Nueces" +
    "\n2-Almendras" +
    "\n3-Castaña" +
    "\n4-Mani" +
    "\nESC para salir.");
}

//BUSQUEDA DE UN PRODUCTO.

/* let frutosSecos = ["nueces", "almendras", "castanas", "mani"];
    console.log(frutosSecos);
let frutasDesecadas = ["arandano rojo", "pasa rubia", "pasa negra"];
    console.log(frutasDesecadas);
let semillas = ["lino", "mix semillas", "chia", "sesamo blanco"];
    console.log(semillas);
let otrosProductos = ["yerba organica", "mantequilla de mani", "arroz yamani", "maiz frito"];
    console.log(otrosProductos);

let listaEntera = frutosSecos.concat(semillas, otrosProductos, frutasDesecadas);
    console.log(listaEntera);


let producto = prompt("¿Que producto desea?");
    console.log(listaEntera.indexOf(producto));
    if (listaEntera.indexOf(producto) >= 0 ){
        alert(`Informacion de ${producto}`);
    }
    else{
        alert("No disponemos de ese producto. Disculpe las molestias.");
    } */


//SIMULADOR INTERACTIVO para el calculo en cuotas de un monto determinado.

/* let nombreApellido = prompt ("ingrese su Nombre y Apellido");
    alert (`Hola ${nombreApellido}.`);
let monto = parseInt(prompt("Por favor ingrese el monto a pagar. \nAboná hasta 3 Cuotas sin interés."));
let cuotas = parseInt(prompt("ingrese cantidad de cuotas. \nEscriba ESC para finalizar su consulta."));
while ( cuotas !== "ESC" && cuotas !== "esc"){
    if (cuotas <= 3) {
        let valor = monto / cuotas;
        alert(`El monto a pagar por mes será de $${valor}`);
        break;
    }
    else {
        let interes = monto * 1.25;
        let valor = interes / cuotas;
        alert(`El monto a pagar durante ${cuotas} meses, será de $${valor}`);
        break;
    }
} */


//DATOS DE FACTURACION.

/* function Facturacion (nombre, apellido, direccion, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.dni = dni;
}
const nuevoCliente = ()=> {
    let nombreCliente = prompt("Ingrese su nombre:");
    let apellidoCliente = prompt("Ingrese su apellido:");
    let direccionCliente = prompt("Ingrese su direccion:");
    let dniCliente = parseInt(prompt("Ingrese su DNI:"));

const nuevoCliente = new Facturacion (nombreCliente, apellidoCliente, direccionCliente, dniCliente);
    console.log(nuevoCliente);
} */