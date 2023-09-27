export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
  title: string;
  price: number;
  stock: number;
  size?: Sizes;
};
