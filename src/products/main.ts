import { addProduct, calculateStock, products } from './product.service';

addProduct({
  title: 'Product 1',
  price: 10500,
  stock: 3,
});
addProduct({
  title: 'Product 1',
  price: 10500,
  stock: 3,
});
addProduct({
  title: 'Product 1',
  price: 10500,
  stock: 3,
});
addProduct({
  title: 'Product 1',
  price: 10500,
  stock: 3,
});

console.log(products);
console.log(calculateStock());
