/**
 * Productos florales
 */
const floralproducts = [
    {
        id: 1,
        nombre: "Bouquets de flores",
        descripcion: "Arreglos elegantes y versátiles. Se trabajan en diferentes tamaños y combinaciones de color, con envolturas premium y acabados decorativos.",
        image: "/resources/details/bouquet.jpg",
        precio: 18,
        cantidad: 10
    },
    {
        id: 2,
        nombre: "Cajas de rosas",
        descripcion: "Presentación elegante en caja cilíndrica o cuadrada. Conserva hidratación y forma por más tiempo.",
        image: "/resources/details/caja_rosas.jpeg",
        precio: 28,
        cantidad: 10
    },
    {
        id: 3,
        nombre: "Coronas florales",
        descripcion: "Diseños solemnes y armoniosos, adaptados a protocolos y preferencias de color.",
        image: "/resources/details/corona_flores.jpg",
        precio: 45,
        cantidad: 15
    },
    {
        id: 4,
        nombre: "Peceras florales",
        descripcion: "Composiciones modernas en vidrio, con flor focal y follaje en agua.",
        image: "/resources/details/pecera_flores.jpg",
        precio: 22,
        cantidad: 15
    },
    {
        id: 5,
        nombre: "Arreglos simples",
        descripcion: "Detalles rápidos y económicos con flores frescas y combinaciones armoniosas.",
        precio: 12,
        image: "/resources/details/arreglos_simples.jpeg",
        cantidad: 8
    },
    {
        id: 6,
        nombre: "Canastos Florales",
        descripcion: "Arreglos en canasta con mix de flores y follajes, estilo cálido y campestre.",
        precio: 25,
        image: "/resources/details/canasto_flores.jpg",
        cantidad: 12
    },
    {
        id: 7,
        nombre: "Centros de mesa",
        descripcion: "Diseños pensados para altura y diámetro adecuados, sin bloquear la vista de los invitados.",
        precio: 30,
        image: "/resources/details/centros_mesa.jpg",
        cantidad: 6
    }
]

const productElement = document.getElementById("products")

console.log(productElement)
productElement.innerHTML = ``;

for (prod of floralproducts) {
    let element = document.createElement("article");
    element.classList.add("bg-[#FDCB80]")
    element.innerHTML = 
    `
            <div class="flex flex-col md:flex-row gap-6 items-start">
            <img src="${prod.image}" alt="${prod.nombre}" class="w-full md:w-60 rounded-xl object-cover"/>
            <div class="flex-1">
                <h2 class="text-2xl font-bold text-orange-900">${prod.nombre}</h2>
                <p class="mt-2">${prod.descripcion}</p>

                <div class="mt-4 grid sm:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-sm font-semibold text-orange-900">Flores sugeridas</h3>
                        <p class="mt-1 text-sm">Rosas, astromelias, lirios, gerberas, claveles, gypsophila, eucalipto.</p>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-orange-900">Ideal para</h3>
                        <p class="mt-1 text-sm">Cumpleaños, aniversarios, graduaciones, agradecimientos.</p>
                    </div>
                </div>

                <div class="mt-4 flex flex-wrap gap-2">
                    <span class="px-2 py-0.5 rounded bg-white/60 text-orange-900 text-xs">Clásico</span>
                    <span class="px-2 py-0.5 rounded bg-white/60 text-orange-900 text-xs">Premium</span>
                    <span class="px-2 py-0.5 rounded bg-white/60 text-orange-900 text-xs">Colores a elección</span>
                </div>

                <div class="mt-5 flex items-center justify-between">
                    <span class="text-xl md:text-2xl font-semibold text-orange-700">Desde ${prod.precio}$</span>
                    <a href="#" data-id="1"
                       class="solicitar inline-flex items-center justify-center px-4 py-2 rounded bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
                        Solicitar este producto
                    </a>
                </div>
            </div>
        </div>
    `
    productElement.appendChild(element)
}