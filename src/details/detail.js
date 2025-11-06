const addProductToCart = (id) => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productToAdd = products.find(prod => prod.id === id);
    if (productToAdd) {
        const existingProductIndex = carrito.findIndex(prod => prod.id === id);
        if (existingProductIndex !== -1) {
            alert(`${productToAdd.nombre} ya está en el carrito.`);
        } else {
            carrito.push({ ...productToAdd, cantidad: 1 });
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(`${productToAdd.nombre} ha sido agregado al carrito.`);
        }
    }
}