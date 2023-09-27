(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(data);
  };

  login({
    email: 'Carlos@ememe.cmo',
    password: '121212',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = []

  const addProduct = (data: {
    title: string;
    price: number;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data)
    console.log(data.title, data.price, data.stock, data.size);
  };

  addProduct({
    title: "Shoes",
    price: 2000,
    stock: 10,
    size: "S"
  })

})();
