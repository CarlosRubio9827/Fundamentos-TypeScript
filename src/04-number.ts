(() => {
  let productPrice = 100;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productsInStock: number;
  if (productsInStock > 10) {
    console.log('productsInStock 2', productsInStock);
  }
  console.log('productsInStock', productsInStock);

  let discount = parseInt('123');
  console.log('Discount: ', discount);
})();
