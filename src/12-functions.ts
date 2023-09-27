(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const createProductToJson = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    }
  };

  const productNew = createProductToJson("V1", new Date(), 12)
  console.log(productNew)

})();
