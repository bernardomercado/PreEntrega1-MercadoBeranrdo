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

// Ejemplo:

const manager = new ProductManager();

console.log(manager.getProducts()); // Debe devolver un arreglo vacío []

manager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25,
});

console.log(manager.getProducts()); // Debe devolver el producto recién agregado con ID

manager.addProduct({
  title: 'producto prueba',
  description: 'Este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25,
});


const productById = manager.getProductById(2); // Debe arrojar un error "Not found" ya que el producto con id 2 no existe
console.log(productById);