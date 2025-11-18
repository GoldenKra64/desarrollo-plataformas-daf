class ProductView {
    constructor () {
        this.containerProducts = $("#products");
        this.carrito = $("#carrito");
    }
    renderProducts(products) {
        this.containerProducts.html = "";

        if (products.length === 0) {
            this.containerProducts.html =
                '<div class="text-orange-900 text-lg font-semibold">No se encontraron resultados</div>';
            return;
        }

        products.forEach((prod) => {
            let element = document.createElement("article");
            element.className =
                "bg-[#FDCB80] p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition flex flex-col justify-between items-center text-center w-full max-w-[250px] h-[360px]";
            element.html = `
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
            this.containerProducts.append(element);
        });
    }
}