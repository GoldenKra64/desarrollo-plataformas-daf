class Products {
    constructor() {
        var products = localStorage.getItem("products");
        this.floralproducts = JSON.parse(products);
        this.carr = [];
    }
    getProducts() {
        return this.floralproducts;
    }
}

/*
getProductById(id){
    return find(p =>
    p.id == id);
}
 */