const addProductToCart = (id) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productToAdd = products.find(prod => prod.id === id);
    if (productToAdd) {
        const existingProductIndex = carrito.findIndex(prod => prod.id === id);
        if (existingProductIndex !== -1) {
            const prodcarrito = new ProductoCarritoHelper(`${productToAdd.nombre} ya está en el carrito`, false);
            postAddToCarrito(prodcarrito);
        } else {
            carrito.push({ ...productToAdd, cantidad: 1 });
            localStorage.setItem('carrito', JSON.stringify(carrito));
            const prodcarrito = new ProductoCarritoHelper(`${productToAdd.nombre} ha sido agregado al carrito`, true);
            postAddToCarrito(prodcarrito);
        }
    }
}

const postAddToCarrito = (helper) => {
    if (helper.valid){
        $("#popupExito").text(helper.description);
        $("#popupExito").show();
        $("#popupError").hide();
    } else {
        $("#popupError").text(helper.description);
        $("#popupExito").hide();
        $("#popupError").show();
    }

    setTimeout(() => {
        $("#popupExito").hide();
        $("#popupError").hide();
    }, 2000);
}

class ProductoCarritoHelper {
    description = "";
    valid = false;

    constructor(description, valid){
        this.description = description;
        this.valid = valid;
    }
}