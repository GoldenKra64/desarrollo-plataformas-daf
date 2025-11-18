/**
 * Prerequisitos:
 * 
 * Proceso:
 * - Crear un array de objetos que representen los productos en el carrito de compras.
 * - Guardar el objeto en un localstorage con la clave 'producto'.
 * - Mostrar el array desde el localstorage con la clave 'producto' en el HTML
 * - Actualizar cantidad del producto con una función
 * - Actualizar subtotal del producto con una función
 * - Calcular el total del carrito con una función
 */
/*
const carritoProductos = JSON.parse(localStorage.getItem('carrito'));
const productosDb = JSON.parse(localStorage.getItem('products'));

$(document).ready(function() {
    if (carritoProductos && carritoProductos.length > 0) {
        $("#carrito-container").html(""); // Limpiar el mensaje de carrito vacío

        for (let prod of carritoProductos) {
            const subtotal = prod.cantidad * prod.precio;

            $("#carrito-container").append(`
                <div class="grid grid-cols-5 items-center text-center bg-white border rounded-lg shadow p-3 mb-4">
                    <div class="flex justify-center text-center items-center gap-4">
                        <img src="${prod.image}" alt="${prod.nombre}" class="w-16 h-16 object-cover rounded">
                        <p class="font-medium text-gray-700">${prod.nombre}</p>
                    </div>

                    <div class="flex justify-center">
                        <input 
                            data-id="${prod.id}"
                            type="number" 
                            min="1" 
                            value="${prod.cantidad}" 
                            class="qty-input w-10 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-[#f4b183]"/>
                    </div>

                    <p class="text-gray-700">${prod.precio}$</p>

                    <div class="flex items-center justify-center gap-2">
                        <p id="subtotal-${prod.id}" class="text-gray-700">${subtotal}$</p>
                    </div>

                    <div class="flex items-center justify-center gap-2">
                        <button data-id="${prod.id}" class="btn-delete bg-white text-[#f4b183] p-2 rounded-full shadow hover:bg-[#ffe8d6]">🗑️</button>
                    </div>
                </div>
            `);

            $(document).on('click', '.btn-delete', function() {
                const id = $(this).data('id');
                deleteProduct(id);
            });

            $(document).on('change', '.qty-input', function() {
                const id = $(this).data('id');
                const nuevaQty = $(this).val();

                updateQty(id, nuevaQty);
                updateSubtotalIndividual(id);

                updateTotalGeneral();
            });
        }

        updateTotalGeneral();
    }
});

const deleteProduct = (id) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(prod => prod.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}

const updateQty = (id, nuevaQty) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(prod => prod.id === id);

    if (index !== -1) {
        carrito[index].cantidad = parseInt(nuevaQty);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        updateSubtotalIndividual(id);
    }
}

const recalcularSubtotalIndividual = (id) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(prod => prod.id === id);
    const subtotal = carrito[index].precio * carrito[index].cantidad;
    return subtotal;
}

const updateSubtotalIndividual = (id) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(prod => prod.id === id);

    if (index !== -1) {
        const subtotalRecalculado = recalcularSubtotalIndividual(id);
        const subtotal = subtotalRecalculado;
        $(`#subtotal-${id}`).text(`${subtotal.toFixed(2)}$`);
    }
}

const updateTotalGeneral = () => {
    let total = 0;
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    for (let prod of carrito) {
        total += prod.precio * prod.cantidad;
    }

    $("#carrito-total").text(`Total del carrito: ${total.toFixed(2)}$`);
}
*/
const carritoProductos = JSON.parse(localStorage.getItem('carrito')) || [];

// Render inicial
$(document).ready(function() {
    if (carritoProductos.length > 0) {
        $("#carrito-container").html(""); // limpiar mensaje "vacío"

        for (let prod of carritoProductos) {
            const subtotal = prod.cantidad * prod.precio;

            $("#carrito-container").append(`
        <div class="grid grid-cols-5 items-center text-center bg-white border rounded-lg shadow p-3 mb-4">
          <div class="flex justify-center text-center items-center gap-4">
            <img src="${prod.image}" alt="${prod.nombre}" class="w-16 h-16 object-cover rounded">
            <p class="font-medium text-gray-700">${prod.nombre}</p>
          </div>

          <div class="flex justify-center">
            <input 
              data-id="${prod.id}"
              type="number" 
              min="1" 
              value="${prod.cantidad}" 
              class="qty-input w-10 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-[#f4b183]"/>
          </div>

          <p class="text-gray-700">${prod.precio}$</p>

          <div class="flex items-center justify-center gap-2">
            <p id="subtotal-${prod.id}" class="text-gray-700">${subtotal}$</p>
          </div>

          <div class="flex items-center justify-center gap-2">
            <button data-id="${prod.id}" class="btn-delete bg-white text-[#f4b183] p-2 rounded-full shadow hover:bg-[#ffe8d6]">🗑️</button>
          </div>
        </div>
      `);
        }

        updateTotalGeneral();
    }
});

// Eventos delegados (una sola vez)
$(document).on('click', '.btn-delete', function() {
    const id = Number($(this).data('id'));
    deleteProduct(id);
});

$(document).on('change', '.qty-input', function() {
    const id = Number($(this).data('id'));
    const nuevaQty = $(this).val();

    updateQty(id, nuevaQty);
    updateSubtotalIndividual(id);
    updateTotalGeneral();
});

const deleteProduct = (id) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(prod => prod.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}

const updateQty = (id, nuevaQty) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(prod => prod.id === id);

    if (index !== -1) {
        let qty = parseInt(nuevaQty, 10);
        if (isNaN(qty) || qty < 1) qty = 1;
        carrito[index].cantidad = qty;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        updateSubtotalIndividual(id);
    }
}

const recalcularSubtotalIndividual = (id) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(prod => prod.id === id);
    if (index === -1) return 0;
    return carrito[index].precio * carrito[index].cantidad;
}

const updateSubtotalIndividual = (id) => {
    const subtotal = recalcularSubtotalIndividual(id);
    $(`#subtotal-${id}`).text(`${subtotal.toFixed(2)}$`);
}

const updateTotalGeneral = () => {
    let total = 0;
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    for (let prod of carrito) total += prod.precio * prod.cantidad;
    $("#carrito-total").text(`Total del carrito: ${total.toFixed(2)}$`);
}


// Funcionalidad de pago simulado

/**
 * Prerequisitos:
 * - Objeto de productos del carrito
 * - Objeto de productos en general
 * - SetTimeout()
 * - Promesas
 * 
 * Procesos:
 * - Calcular el total de carrito
 * - Crear una funcion que verifique el stock del producto con promesas
 * - Procesar el pago con promesas, devolviendo despues de 2 segundos una id de pago
 * - Poner todo el proceso en una función
 */

/*
const calcularCarrito = (products) => {
    let totalCarrito = 0;
    for (let producto of products) {
        totalCarrito += producto.precio * producto.cantidad;
    }

    console.log(`Cantidad total: ${totalCarrito}$`);
    return totalCarrito
}

function VerificarStockPromise(carrito) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            for (let itemCarrito of carrito) {
                let productoDb = productosDb.find(p => p.id === itemCarrito.id)

                if (!productoDb) {
                    return rej(`Producto no encontrado en DB: ${itemCarrito.nombre || itemCarrito.id}`)
                }
                if (productoDb.cantidad < itemCarrito.cantidad) {
                    return rej(`Stock insuficiente para: ${productoDb.nombre}`)
                }
            }
            res("Todos los productos tienen stock disponible")
        }, 1000)
    })
}
        
function ProcessPaymentPromise(monto) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ pagoId: "PAY-456", monto })
        }, 1500)
    })
}

function comprarProductoPromise() {
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    if (carrito.length == 0) {
        const response = new CarritoResponse(`No se puede pagar un carrito vacio`, false);
        return response;
    }
    return VerificarStockPromise(carrito)
        .then(() => {
            return calcularCarrito(carrito);
        }).then(precioFinal => {
            return ProcessPaymentPromise(precioFinal);
        }).then(pago => {
            const response = new CarritoResponse(`Compra completada: ${pago.pagoId}`, true);
            return response;
        }).catch(err => {
            const response = new CarritoResponse(`Ocurrio un error: ${err}`, false);
            return response;
        }
    )
}

$(document).on('click', '#pago-boton', async function() {
    $("#modalCargando").show();
    const result = await comprarProductoPromise();

    $("#modalCargando").hide();
    if (result.completed){
        $("#popupExito").text(result.response);
        $("#popupExito").show();
        $("#popupError").hide();
    } else {
        $("#popupError").text(result.response);
        $("#popupExito").hide();
        $("#popupError").show();
    }

    setTimeout(() => {
        $("#popupExito").hide();
        $("#popupError").hide();
    }, 2000);
});

class CarritoResponse {
    response = ""
    completed = false

    constructor (response, completed) {
        this.response = response;
        this.completed = completed;
    }
}
*/
const calcularCarrito = (products) => {
    let totalCarrito = 0;
    for (let producto of (products || [])) {
        totalCarrito += Number(producto.precio) * Number(producto.cantidad);
    }
    console.log(`Cantidad total: ${totalCarrito}$`);
    return totalCarrito;
};

function VerificarStockPromise(carrito) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const productosDb = JSON.parse(localStorage.getItem('products') || '[]'); // leer fresco

            for (let itemCarrito of carrito) {
                let productoDb = productosDb.find(p => p.id === itemCarrito.id);

                if (!productoDb) {
                    return rej(`Producto no encontrado en DB: ${itemCarrito.nombre || itemCarrito.id}`);
                }
                // stock simulado: si no existe, asumimos 999
                const stock = (typeof productoDb.stock === 'number') ? productoDb.stock : 999;
                if (Number(itemCarrito.cantidad) > stock) {
                    return rej(`Stock insuficiente para: ${productoDb.nombre}`);
                }
            }
            res("Todos los productos tienen stock disponible");
        }, 1000);
    });
}

function ProcessPaymentPromise(monto) {
    return new Promise((res) => {
        setTimeout(() => {
            res({ pagoId: "PAY-456", monto: Number(monto || 0) });
        }, 1500);
    });
}

function comprarProductoPromise() {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    if (!Array.isArray(carrito) || carrito.length === 0) {
        const response = new CarritoResponse(`No se puede pagar un carrito vacio`, false);
        return Promise.resolve(response); // <- devuelve Promise (mínimo cambio)
    }
    return VerificarStockPromise(carrito)
        .then(() => calcularCarrito(carrito))
        .then(precioFinal => ProcessPaymentPromise(precioFinal))
        .then(pago => new CarritoResponse(`Compra completada: ${pago.pagoId}`, true))
        .catch(err => new CarritoResponse(`Ocurrio un error: ${err}`, false));
}

$(document).on('click', '#pago-boton', async function() {
    $("#modalCargando").show();
    const result = await comprarProductoPromise();

    $("#modalCargando").hide();
    if (result.completed){
        $("#popupExito").text(result.response).show();
        $("#popupError").hide();
        // Si quieres vaciar el carrito tras pagar (opcional, una línea):
        localStorage.setItem('carrito', JSON.stringify([])); location.reload();
    } else {
        $("#popupError").text(result.response).show();
        $("#popupExito").hide();
    }

    setTimeout(() => {
        $("#popupExito, #popupError").hide();
        },2000);
});

class CarritoResponse {
    response = "";
    completed = false;
    constructor (response, completed) {
        this.response = response;
        this.completed = completed;
    }
}
