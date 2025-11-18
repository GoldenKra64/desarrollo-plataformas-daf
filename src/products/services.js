const floralproducts = [
    {
        id: 1,
        nombre: "Bouquets de flores",
        descripcion: "Arreglos elegantes y versátiles.",
        image: "/resources/details/bouquet.jpg",
        precio: 18,
    },
    {
        id: 2,
        nombre: "Cajas de rosas",
        descripcion: "Presentación elegante en caja cilíndrica o cuadrada.",
        image: "/resources/details/caja_rosas.jpeg",
        precio: 28,
    },
    {
        id: 3,
        nombre: "Coronas florales",
        descripcion: "Diseños solemnes y armoniosos.",
        image: "/resources/details/corona_flores.jpg",
        precio: 45,
    },
    {
        id: 4,
        nombre: "Peceras florales",
        descripcion: "Composiciones modernas en vidrio.",
        image: "/resources/details/pecera_flores.jpg",
        precio: 22,
    },
    {
        id: 5,
        nombre: "Pedestales Florales",
        descripcion: "Arreglos altos para entradas",
        image: "/resources/details/pedestal_flores.jpg",
        precio: 55,
    },
    {
        id: 6,
        nombre: "Arreglos simples",
        descripcion: "Detalles rápidos y económicos.",
        image: "/resources/details/arreglos_simples.jpeg",
        precio: 12,
    },
    {
        id: 7,
        nombre: "Canastos florales",
        descripcion: "Arreglos en canasta con mix de flores y follajes.",
        image: "/resources/details/canasto_flores.jpg",
        precio: 25,
    },
    {
        id: 8,
        nombre: "Centros de mesa",
        descripcion: "Diseños pensados para altura y diámetro adecuados.",
        image: "/resources/details/centros_mesa.jpg",
        precio: 30,
    },
];

// DOM
const productElement = document.getElementById("products");
const loading = document.getElementById("loading");

// Estado de filtro
let filtro = { q: "", min: null, max: null };

// Filtrado
function aplicarFiltro() {
    return floralproducts.filter(
        (prod) =>
            (!filtro.q ||
                prod.nombre.toLowerCase().includes(filtro.q.toLowerCase()) ||
                prod.descripcion.toLowerCase().includes(filtro.q.toLowerCase())) &&
            (!filtro.min || prod.precio >= filtro.min) &&
            (!filtro.max || prod.precio <= filtro.max)
    );
}

// Render tarjetas
/*
function renderProductos(lista) {
    productElement.innerHTML = "";

    if (lista.length === 0) {
        productElement.innerHTML =
            '<div class="text-orange-900 text-lg font-semibold">No se encontraron resultados</div>';
        return;
    }

    lista.forEach((prod) => {
        let element = document.createElement("article");
        element.className =
            "bg-[#FDCB80] p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col justify-between items-center text-center w-full max-w-[250px] h-[360px]";
        element.innerHTML = `
      <div class="w-full h-[160px] flex items-center justify-center overflow-hidden rounded-lg bg-white">
        <img src="${prod.image}" alt="${prod.nombre}" class="w-full h-full object-cover"/>
      </div>
      <div class="mt-3 flex flex-col justify-between h-[90px]">
        <h2 class="text-lg font-bold text-orange-900">${prod.nombre}</h2>
        <p class="text-xs text-orange-900/80 leading-tight">${prod.descripcion}</p>
      </div>
      <div class="flex justify-between items-center w-full mt-2 text-sm">
        <span class="font-semibold text-orange-700">${prod.precio}$</span>
        <a href="../details/details.html" data-id="${prod.id}" class="px-2 py-1 bg-orange-500 text-white rounded-sm text-xs hover:bg-orange-600 transition">Solicitar</a>
      </div>
    `;
        productElement.appendChild(element);
    });
}
*/

const view = new ProductView();

// Simulación de carga asíncrona
setTimeout(() => {
    loading.style.display = "none";
    productElement.style.display = "grid";
    view.renderProducts(floralproducts);
}, 2000);

// Eventos filtros
document.getElementById("q").addEventListener("input", (e) => {
    filtro.q = e.target.value;
    renderProductos(aplicarFiltro());
});

document.getElementById("pmin").addEventListener("input", (e) => {
    filtro.min = Number(e.target.value) || null;
    renderProductos(aplicarFiltro());
});

document.getElementById("pmax").addEventListener("input", (e) => {
    filtro.max = Number(e.target.value) || null;
    renderProductos(aplicarFiltro());
});