//Cargado dinamico
const floralproducts = [
    {
        id: 1,
        nombre: "Bouquets de flores",
        descripcion: "Arreglos elegantes y versátiles. Se trabajan en diferentes tamaños y combinaciones de color, con envolturas premium y acabados decorativos.",
        image: "/resources/details/bouquet.jpg",
        precio: 18,
        material: "Papel kraft/premium, lazos, cinta, papel seda",
        ideal: "Cumpleaños, aniversarios, graduaciones, agradecimientos."
    },
    {
        id: 2,
        nombre: "Cajas de rosas",
        descripcion: "Presentación elegante en caja cilíndrica o cuadrada. Conserva hidratación y forma por más tiempo.",
        image: "/resources/details/caja_rosas.jpeg",
        precio: 28,
        material: "Caja rígida, esponja floral (oasis), lazo",
        ideal: "Aniversarios, San Valentín, cumpleaños, ocasiones especiales."
    },
    {
        id: 3,
        nombre: "Coronas florales",
        descripcion: "Diseños solemnes y armoniosos, adaptados a protocolos y preferencias de color.",
        image: "/resources/details/corona_flores.jpg",
        precio: 45,
        material: "Aro base, esponja floral, banda con mensaje",
        ideal: "Condolencias y homenajes."
    },
    {
        id: 4,
        nombre: "Peceras florales",
        descripcion: "Composiciones modernas en vidrio, con flor focal y follaje en agua.",
        image: "/resources/details/pecera_flores.jpg",
        precio: 22,
        material: "Pecera de vidrio, agua, piedras decorativas",
        ideal: "Centros de mesa en eventos, recepciones, oficinas."
    },
    {
        id: 5,
        nombre: "Pedestales Florales",
        descripcion: "Arreglos altos para entradas, pasillos o escenarios que buscan impacto visual.",
        image: "/resources/details/pedestal_flores.jpg",
        precio: 55,
        material: "Pedestal/base metálica, esponja floral",
        ideal: "Bodas, graduaciones, eventos corporativos."
    },
    {
        id: 6,
        nombre: "Arreglos simples",
        descripcion: "Detalles rápidos y económicos con flores frescas y combinaciones armoniosas.",
        image: "/resources/details/arreglos_simples.jpeg",
        precio: 12,
        material: "Base pequeña o jarrón, papel kraft",
        ideal: "Detalles cotidianos, agradecimientos, visitas."
    },
    {
        id: 7,
        nombre: "Canastos florales",
        descripcion: "Arreglos en canasta con mix de flores y follajes, estilo cálido y campestre.",
        image: "/resources/details/canasto_flores.jpg",
        precio: 25,
        material: "Canasto de mimbre, esponja floral",
        ideal: "Cumpleaños, visitas, decoración del hogar."
    },
    {
        id: 8,
        nombre: "Centros de mesa",
        descripcion: "Diseños pensados para altura y diámetro adecuados, sin bloquear la vista de los invitados.",
        image: "/resources/details/centros_mesa.jpg",
        precio: 30,
        material: "Base baja, esponja floral (oasis)",
        ideal: "Bodas, recepciones, eventos corporativos."
    },
];

//Guardar productos en localStorage (para que el carrito los encuentre)
$(function () {
    localStorage.setItem("products", JSON.stringify(floralproducts));
});

document.addEventListener("DOMContentLoaded", function () {
    var products_ele = document.getElementById("products");
    if (!products_ele) return;


    for (var i = 0; i < floralproducts.length; i++) {
        var p = floralproducts[i];

        var card = document.createElement("article");
        card.className = "bg-[#FDCB80] rounded-2xl p-6 md:p-8 shadow hover:shadow-lg transition";

        // Construcción de la tarjeta respetando el diseño original
        // Se agregó un bloque específico para "Material"
        card.innerHTML =
            '<div class="flex flex-col md:flex-row gap-6 items-start">' +
            '  <img src="' + p.image + '" alt="' + p.nombre + '" ' +
            '       class="w-full md:w-60 rounded-xl object-cover" ' +
            "       onerror=\"this.src='/resources/fallback.jpg';this.alt='Imagen no disponible';\"/>" +
            '  <div class="flex-1">' +
            '    <h2 class="text-2xl font-bold text-orange-900">' + p.nombre + "</h2>" +
            '    <p class="mt-2">' + (p.descripcion || "") + "</p>" +

            // === Bloque de información (incluye MATERIAL) ===
            '    <div class="mt-4 grid sm:grid-cols-2 gap-4">' +
            '      <div>' +
            '        <h3 class="text-sm font-semibold text-orange-900">Material</h3>' +
            '        <p class="mt-1 text-sm">' + (p.material || "—") + "</p>" +
            "      </div>" +

             '      <div>' +
             '        <h3 class="text-sm font-semibold text-orange-900">Ideal para</h3>' +
             '        <p class="mt-1 text-sm">' + (p.ideal || "—") + '</p>' +
             '      </div>' +
            "    </div>" +


            // Precio + botón
            '    <div class="mt-5 flex items-center justify-between">' +
            '      <span class="text-xl md:text-2xl font-semibold text-orange-700">Desde $' + p.precio + "</span>" +
            '      <a class="cursor-pointer inline-flex items-center justify-center px-4 py-2 rounded bg-orange-500 text-white font-medium hover:bg-orange-600 transition" ' +
            '         onclick="addProductToCart(' + p.id + ')">' +
            "         Solicitar este producto" +
            "      </a>" +
            "    </div>" +
            "  </div>" +
            "</div>";

        products_ele.appendChild(card);
    }
});



//Funcion carrito
// ====Carrito (con jQuery)====
const addProductToCart = (id) => {
    const lsProducts = JSON.parse(localStorage.getItem('products') || 'null');
    const source = (Array.isArray(lsProducts) && lsProducts.length)
        ? lsProducts
        : (Array.isArray(window.floralproducts) ? window.floralproducts : []);

    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

    const productToAdd = source.find(prod => prod.id === id);
    if (!productToAdd) {
        postAddToCarrito(new ProductoCarritoHelper("Producto no encontrado.", false));
        return;
    }

    const existingIndex = carrito.findIndex(prod => prod.id === id);
    if (existingIndex !== -1) {
        carrito[existingIndex].cantidad = (carrito[existingIndex].cantidad || 1) + 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        postAddToCarrito(new ProductoCarritoHelper(`Se incrementó la cantidad de “${productToAdd.nombre}”.`, true));
    } else {
        carrito.push({ ...productToAdd, cantidad: 1 });
        localStorage.setItem('carrito', JSON.stringify(carrito));
        postAddToCarrito(new ProductoCarritoHelper(`“${productToAdd.nombre}” ha sido agregado al carrito`, true));
    }
};

const postAddToCarrito = (helper) => {
    const $ok = $("#popupExito");
    const $err = $("#popupError");

    if (!$ok.length || !$err.length) return; // si no existen, salimos

    if (helper.valid){
        $ok.text(helper.description).show();
        $err.hide();
    } else {
        $err.text(helper.description).show();
        $ok.hide();
    }

    clearTimeout(postAddToCarrito._t);
    postAddToCarrito._t = setTimeout(() => {
        $ok.hide();
        $err.hide();
    }, 2000);
};

class ProductoCarritoHelper {
    constructor(description, valid){
        this.description = description || "";
        this.valid = !!valid;
    }
}


