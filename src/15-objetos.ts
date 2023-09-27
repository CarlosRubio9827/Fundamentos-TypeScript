(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    price: number;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
    console.log(data.title, data.price, data.stock, data.size);
  };

  products.push({
    title: 'asas',
    price: 3000,
    stock: 2,
    size: 'XL',
  });
  products.push({
    title: 'Hi3',
    price: 2500,
    stock: 3,
  });
  addProduct({
    title: 'Shoes',
    price: 2000,
    stock: 10,
    size: 'S',
  });

  console.log(products)
})();
