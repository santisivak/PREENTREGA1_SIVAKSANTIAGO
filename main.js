let producto;
let precio=0;
let productoElegido;

let nombreUsuario = prompt("Ingrese su nombre:");
let apellidoUsuario = prompt("Ingrese su apellido:");
let edad = prompt("Ingrese su edad:");
edad = Number(edad);
    while (isNaN(edad)){
        alert ("Ingresa un valor numérico")
        edad = prompt("Ingrese su edad:");
    }


if(edad>=18){
    alert (`Hola ${nombreUsuario} ${apellidoUsuario}, puede continuar con su compra`);
}else if (edad<=18){
    alert (`Hola ${nombreUsuario} ${apellidoUsuario}, lo lamentamos pero no puede proceder con su compra debido a que es menor de edad`);
    Esc;
} 
//Constructor
class Producto {
    constructor(item, nombre, material, precio){
        this.item=item;
        this.nombre=nombre;
        this.material=material;
        this.precio=precio;
    }
}

//Objetos
const anilloAcero = new Producto ("a", "Anillo", "Acero", 20);
const anilloPlata = new Producto ("b", "Anillo", "Plata", 40);
const anilloOro = new Producto ("c", "Anillo", "Oro", 100);
const pulseraAcero = new Producto ("d", "Pulsera", "Acero", 40);
const pulseraPlata = new Producto ("e", "Pulsera", "Plata", 80);
const pulseraOro = new Producto ("f", "Pulsera", "Oro", 200);
const collarAcero = new Producto ("g", "Collar", "Acero", 100);
const collarPlata = new Producto ("h", "Collar", "Plata", 200);
const collarOro = new Producto ("i", "Collar", "Oro", 500);

//Array de productos
const arrayProductos = [anilloAcero,anilloPlata,anilloOro,pulseraAcero,pulseraPlata,pulseraOro,collarAcero,collarPlata,collarOro]
console.log(arrayProductos)

//Carrito de compras
const productosElegidos = []

//Lista de productos
let listaProductos =  arrayProductos.map ((producto) => `${producto.item}) ${producto.nombre} de ${producto.material} $${producto.precio}`);

//Seleccion
function seleccion(){
    productoElegido = prompt("Elija su producto:\n" + listaProductos.join("\n")).toLocaleLowerCase();
    eleccion(productoElegido);
}


seleccion();
eleccion(productoElegido);

function eleccion(productoElegido){
    if (productoElegido == "a"){
        precio = 20;
    } else if(productoElegido == "b"){
        precio = 40;
    } else if(productoElegido == "c"){
        precio = 100;
    } else if(productoElegido == "d"){
        precio = 40;
    } else if(productoElegido == "e"){
        precio = 80;
    } else if(productoElegido == "f"){
        precio = 200;
    } else if(productoElegido == "g"){
        precio = 100;
    } else if(productoElegido == "h"){
        precio = 200;
    } else if(productoElegido == "i"){
        precio = 500;
    } else{
        alert("Elija un item válido")
        seleccion();
    }
}

productosElegidos.push({producto, precio})

precioFinal();

function precioFinal(){
    let pregunta = prompt("¿Desea seguir comprando?")
    if (pregunta == "si") {
    seleccion();
    } else if (pregunta == "no") {
    alert("Gracias por tu compra "+ "nombreUsuario" + "\nQue lo disfrutes!");
    break;
    }
}



let totalPrecio = productosElegidos.reduce((acumulador, elemento)=>acumulador + elemento.precio, 0)
alert(totalPrecio)
