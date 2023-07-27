class ProductManager {
    #products

    constructor() {

      this.#products = [];

      this.nextId = 1;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error('All fields are mandatory.');
        return;
      }
  
      if (this.#products.some((item) => item.code === product.code)) {
        console.error('Product with the same code already exists.');
        return;
      }
  
      product.id = this.nextId++;
      this.#products.push(product);
    }
  
    getProducts() {
      return this.#products;
    }
  
    getProductById(id) {
      const product = this.#products.find((item) => item.id === id);
      if (!product) {
        console.error('Not found');
      }
      return product;
    }
}