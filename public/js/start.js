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
];

localStorage.setItem('products', JSON.stringify(floralproducts));