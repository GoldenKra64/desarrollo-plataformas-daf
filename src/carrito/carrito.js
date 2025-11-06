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

const producto = [
    {
        id: 1,
        nombre: "Arreglos simples",
        descripcion: "Diseños frescos y delicados, ideales para regalar o decorar espacios con un toque natural y armonioso.",
        image: "/resources/details/arreglos_simples.jpeg",
        precio: 12,
        cantidad: 8
    },
    {
        id: 2,
        nombre: "Centro de mesas",
        descripcion: "Centro de mesas",
        image: "/resources/details/centros_mesa.jpg",
        precio: 24.99,
        cantidad: 2
    }
]

//localStorage.setItem('producto', JSON.stringify(producto));

const carritoProductos = JSON.parse(localStorage.getItem('producto'));

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
    let carrito = JSON.parse(localStorage.getItem('producto')) || [];
    carrito = carrito.filter(prod => prod.id !== id);
    localStorage.setItem('producto', JSON.stringify(carrito));
    location.reload();
}

const updateQty = (id, nuevaQty) => {
    let carrito = JSON.parse(localStorage.getItem('producto')) || [];
    const index = carrito.findIndex(prod => prod.id === id);

    if (index !== -1) {
        carrito[index].cantidad = parseInt(nuevaQty);
        localStorage.setItem('producto', JSON.stringify(carrito));
        updateSubtotalIndividual(id);
    }
}

const recalcularSubtotalIndividual = (id) => {
    let carrito = JSON.parse(localStorage.getItem('producto')) || [];
    const index = carrito.findIndex(prod => prod.id === id);
    const subtotal = carrito[index].precio * carrito[index].cantidad;
    return subtotal;
}

const updateSubtotalIndividual = (id) => {
    let carrito = JSON.parse(localStorage.getItem('producto')) || [];
    const index = carrito.findIndex(prod => prod.id === id);

    if (index !== -1) {
        const subtotalRecalculado = recalcularSubtotalIndividual(id);
        const subtotal = subtotalRecalculado;
        $(`#subtotal-${id}`).text(`${subtotal.toFixed(2)}$`);
    }
}

const updateTotalGeneral = () => {
    let total = 0;
    let carrito = JSON.parse(localStorage.getItem('producto')) || [];

    for (let prod of carrito) {
        total += prod.precio * prod.cantidad;
    }

    $("#carrito-total").text(`Total del carrito: ${total.toFixed(2)}$`);
}