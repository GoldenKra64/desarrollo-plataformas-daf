const floralproducts = [
    {
        id: 1,
        nombre: "Bouquets de flores",
        descripcion: "Arreglos elegantes y versátiles.",
        image: "../../public/images/details/bouquet.jpg",
        precio: 18,
    },
    {
        id: 2,
        nombre: "Cajas de rosas",
        descripcion: "Presentación elegante en caja cilíndrica o cuadrada.",
        image: "../../public/images/details/caja_rosas.jpeg",
        precio: 28,
    },
    {
        id: 3,
        nombre: "Coronas florales",
        descripcion: "Diseños solemnes y armoniosos.",
        image: "../../public/images/details/corona_flores.jpg",
        precio: 45,
    },
    {
        id: 4,
        nombre: "Peceras florales",
        descripcion: "Composiciones modernas en vidrio.",
        image: "../../public/images/details/pecera_flores.jpg",
        precio: 22,
    },
    {
        id: 5,
        nombre: "Pedestales Florales",
        descripcion: "Arreglos altos para entradas",
        image: "../../public/images/details/pedestal_flores.jpg",
        precio: 55,
    },
    {
        id: 6,
        nombre: "Arreglos simples",
        descripcion: "Detalles rápidos y económicos.",
        image: "../../public/images/details/arreglos_simples.jpeg",
        precio: 12,
    },
    {
        id: 7,
        nombre: "Canastos florales",
        descripcion: "Arreglos en canasta con mix de flores y follajes.",
        image: "../../public/images/details/canasto_flores.jpg",
        precio: 25,
    },
    {
        id: 8,
        nombre: "Centros de mesa",
        descripcion: "Diseños pensados para altura y diámetro adecuados.",
        image: "../../public/images/details/centros_mesa.jpg",
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
    view.renderProducts(aplicarFiltro());
});

document.getElementById("pmin").addEventListener("input", (e) => {
    filtro.min = Number(e.target.value) || null;
    view.renderProducts(aplicarFiltro());
});

document.getElementById("pmax").addEventListener("input", (e) => {
    filtro.max = Number(e.target.value) || null;
    view.renderProducts(aplicarFiltro());
});