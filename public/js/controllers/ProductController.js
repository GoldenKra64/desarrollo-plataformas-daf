class ProductController {
    constructor() {
        this.model = new Products();
        this.view  = new ProductView();
        this.init();
    }

    init() {
        const products = this.model.getProducts();
        this.view.renderProducts(products);
    }
}