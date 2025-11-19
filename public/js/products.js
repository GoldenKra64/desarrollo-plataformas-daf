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

// Simulación de carga asíncrona
setTimeout(() => {
    loading.style.display = "none";
    productElement.style.display = "grid";
    let controller = new ProductController()
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