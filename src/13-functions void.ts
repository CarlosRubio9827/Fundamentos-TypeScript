(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const calculate = (prices: number[]): string => {
    let total = 0;
    prices.forEach((i) => {
      total += i;
    });
    return total.toString();
  };

  // const productNew = calculate([1, 2, 2, 2, 2, 3]);
  // console.log(productNew);
  // console.log(typeof productNew);

  const printTotal = (prices: number[]) => {
    const rta = calculate(prices);
    console.log('Response: ', rta);
  };

  printTotal([12, 12, 2])
})();
