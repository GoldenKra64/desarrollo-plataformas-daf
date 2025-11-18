//Arreglo de productos
const floralproducts = [
    {
        id: 1,
        nombre: "Bouquets de flores",
        descripcion: "Arreglos elegantes y versátiles.",
        image: "/resources/details/bouquet.jpg",
        precio: 18,
        destacado: true
    },
    {
        id: 2,
        nombre: "Cajas de rosas",
        descripcion: "Presentación elegante en caja cilíndrica o cuadrada.",
        image: "/resources/details/caja_rosas.jpeg",
        precio: 28,
        destacado: true
    },
    {
        id: 3,
        nombre: "Coronas florales",
        descripcion: "Diseños solemnes y armoniosos.",
        image: "/resources/details/corona_flores.jpg",
        precio: 45,
        destacado: false
    },
    {
        id: 4,
        nombre: "Peceras florales",
        descripcion: "Composiciones modernas en vidrio.",
        image: "/resources/details/pecera_flores.jpg",
        precio: 22,
        destacado: false
    },
    {
        id: 5,
        nombre: "Pedestales Florales",
        descripcion: "Arreglos altos para entradas",
        image: "/resources/details/pedestal_flores.jpg",
        precio: 55,
        destacado: false
    },
    {
        id: 6,
        nombre: "Arreglos simples",
        descripcion: "Detalles rápidos y económicos.",
        image: "/resources/details/arreglos_simples.jpeg",
        precio: 12,
        destacado: false
    },
    {
        id: 7,
        nombre: "Canastos florales",
        descripcion: "Arreglos en canasta con mix de flores y follajes.",
        image: "/resources/details/canasto_flores.jpg",
        precio: 25,
        dstacado: true
    },
    {
        id: 8,
        nombre: "Centros de mesa",
        descripcion: "Diseños pensados para altura y diámetro adecuados.",
        image: "/resources/details/centros_mesa.jpg",
        precio: 30,
        destacado: false
    },
];
class Products{
    constructor() {
       this.floralproducts = floralproducts;
       this.carr = [];
    }
}
/*
const floralproducts getProducts(){
    return this.floralproducts;

}

getProductById(id){
    return find(p =>
    p.id == id);
}
 */