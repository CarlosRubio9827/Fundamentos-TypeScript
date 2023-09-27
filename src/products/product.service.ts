import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
  // console.log(data.title, data.price, data.stock, data.size);
};

export const calculateStock = (): number => {
  let total = 0;
  products.forEach((i) => {
    total += i.stock;
  });
  return total;
};
