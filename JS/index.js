
let usuario = [];
let contrasena = [];
let listaProductos = [];
let totalPrecio = 0;

let user, pass, opcion, pregunta, precio, producto, productoEliminar, productoPrecio;

alert("Por favor debes registrarse primero antes de usar la aplicacion.")
function pedirDatos() {
    user = prompt("Ingrese su nombre de usuario :");
    pass = prompt("Ingrese su contraseña :");
}
pedirDatos();
if (user === '' || pass === '') {
    alert("Debes ingresar un nombre de usuario y una contrasena.")
} else {
    usuario.push(user);
    contrasena.push(pass);
    alert("Gracias por registrarse.");

    alert("***Por favor iniciar sesión para poder continuar.****");
    pedirDatos();

    if (user != usuario || pass != contrasena) {
        alert("Usuario no encontrado. ");
    } else {
        alert("BIENVENIDOS al sistema de gestión de productos");
        function menuOpcion() {
            alert("****** MENU DE OPCIONES ******\n 1.- Agregar producto\n 2.- Listar producto\n 3.- Eliminar producto\n 4.- Salir");
        }

        do {
            menuOpcion();
            opcion = prompt("Ingrese una opcion :");
            switch (opcion) {
                case "1":
                    function ingresarProducto() {
                        const regex = /^[A-Za-z]+$/;
                        producto = prompt("Ingrese el nombre del producto :");
                        precio = (parseFloat(prompt("Ingrese el precio :")));

                        if (!regex.test(producto)) { // Validamos el campo de producto
                            alert("Por favor, aceptamos solo texto en el campo de producto.");
                        } else {
                            //Creamos un objet que representa el producto y el precio y verificar si el usuario ingresa un precio valido.
                            if (!isNaN(precio)) {
                                productoPrecio = {
                                    nombre: producto,
                                    precio: precio,
                                };
                                if (producto === '' || precio === '') {
                                    alert("Por favor rellene todos los campos.");
                                } else {
                                    listaProductos.push(productoPrecio);
                                    alert("Has agregado un producto a la cesta de compra.");
                                }
                                pregunta = prompt("Quieres agregar otro producto? si/no.");

                                if (pregunta === "si" || pregunta == "SI" || pregunta == "Si") {
                                    ingresarProducto();

                                } else {
                                    alert("Adios!");
                                }

                            } else {
                                alert("Ingrese un precio valido")
                            }

                        }
                    }
                    ingresarProducto()
                    break;

                case "2":
                    if (listaProductos == '') {
                        alert('Su cesta esta vacia,por favor agregar producto')
                        ingresarProducto()
                    } else {
                        alert('Productos en la cesta de compra :\n');
                        listaProductos.forEach((producto, index) => {
                            alert(`${index + 1}.- ${'Producto : ' + producto.nombre}   ${'Precio : $' + producto.precio}`)
                        })
                    }
                    break;
                case "3":
                    function EliminarProducto() {
                        productoEliminar = prompt("Ingrese el producto que quieres eliminar :");
                        //Buscar el producto que quieres eliminar
                        var index = -1;
                        for (var i = 0; i < listaProductos.length; i++) {
                            if (listaProductos[i].nombre === productoEliminar) {
                                index = i;
                                break;
                            }
                        }
                        if (index !== -1) {
                            listaProductos.splice(index, 1)
                            alert("Producto eliminado");
                        } else {
                            alert("Producto no encontrado");
                        }
                    }
                    EliminarProducto();
                    break;

                case "4":
                    break;
                default:
                    alert("Opción no válida");
            }
        } while (opcion !== "4");
    }

}

















